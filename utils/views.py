from django.shortcuts import render
from .models import Imagini, LocatiiAutocar, PretAutocar
from .serializers import ImageSerializer, PretAutocarSerializer, ConditiiSerializer, MasaSerializer, UpdateSerializer, DeleteOrderSerializer, RatingBorderSerializer
from rest_framework import viewsets
from rest_framework import generics
from rest_framework.response import Response
from django.db import connection
from travel_app.utils.jwt_token import decode_token


class ImageListView(generics.ListAPIView):
    serializer_class = ImageSerializer

    def get_queryset(self):
        queryset = Imagini.objects.raw('SELECT * FROM imagini')
        return queryset


class RatingBorderView(generics.GenericAPIView):
    serializer_class = RatingBorderSerializer

    def post(self, request):
        cursor = connection.cursor()
        cursor.execute(
            'select oras avg(nota) from image_rating where avg(nota) in (select top 1 avg(nota) from image_rating group by oras)')
        return Response({
            'success'
        })


class ConditiiView(generics.GenericAPIView):
    serializer_class = ConditiiSerializer

    def post(self, request):
        cursor = connection.cursor()
        cursor.execute('select count(*) from ' + request.data['tip_transport'] + ' where id_' +
                       request.data['tip_transport'] + ' = (select distinct id_' + request.data['tip_transport'] + ' from locatii_' + request.data['tip_transport'] + ' where oras=' + request.data['oras'] + ')')
        isValid = cursor.fetchone()

        return Response({
            'isValid': isValid
        })


class DeleteView(generics.GenericAPIView):
    serializer_class = DeleteOrderSerializer

    def post(self, request):
        cursor = connection.cursor()
        obj = decode_token(request.data['token'])
        cursor.execute(
            'delete from rezervare_tot where nume=(select nume_utilizator from utilizator u where u.username=\'' + obj['username'] + '\')')

        return Response({
            'obj': obj
        })


class UpdateView(generics.GenericAPIView):
    serializer_class = UpdateSerializer

    def post(self, request):
        cursor = connection.cursor()
        obj = decode_token(request.data['token'])
        cursor.execute(
            'update utilizator set password=' +
            request.data['password'] +
            ' where username=\'' + obj['username'] + "'"
        )

        return Response({
            'obj': obj
        })


class MasaView(generics.GenericAPIView):
    serializer_class = MasaSerializer

    def post(self, request):
        cursor = connection.cursor()
        cursor.execute(
            'select id_' + request.data['tip_transport'] + ' from locatii_' + request.data['tip_transport'] +
            ' inner join orase on locatii_' + request.data['tip_transport'] + '.oras = orase.id_oras where nume_oras=' +
            request.data['oras']
        )
        transport = cursor.fetchone()

        cursor.execute(
            'select id_masa from masa where nume_masa=' + request.data['masa']
        )
        masa = cursor.fetchone()

        return Response({
            'id_transport': transport,
            'masa': masa
        })


class PretAutocarView(generics.GenericAPIView):
    serializer_class = PretAutocarSerializer

    def post(self, request):
        cursor = connection.cursor()
        cursor.execute(
            'select pret_autocar from locatii_autocar inner join orase on locatii_autocar.oras = orase.id_oras where nume_oras=' + request.data['oras'])
        pret_autocar = cursor.fetchone()
        cursor.execute(
            'select pret_zbor from locatii_zbor inner join orase on locatii_zbor.oras = orase.id_oras where nume_oras=' + request.data['oras'])
        pret_zbor = cursor.fetchone()
        cursor.execute(
            'select pret_masa from masa where nume_masa=' +
            request.data['masa']
        )
        pret_masa = cursor.fetchone()
        cursor.execute(
            'select procent_discount from discount inner join utilizator on discount.nume_discount=utilizator.status where status=' +
            request.data['statut']
        )
        discount = cursor.fetchone()
        cursor.execute(
            'select id_' + request.data['tip_transport'] + ' from locatii_' + request.data['tip_transport'] +
            ' inner join orase on locatii_' + request.data['tip_transport'] + '.oras = orase.id_oras where nume_oras=' +
            request.data['oras']
        )
        transport = cursor.fetchone()

        return Response(
            {
                'pret_autocar': pret_autocar,
                'pret_zbor': pret_zbor,
                'pret_masa': pret_masa,
                'discount': discount,
                'id_transport': transport
            }
        )
