from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .models import Utilizator
from rest_framework import serializers
from .serializers import LoginSerializer, RegisterSerializer, RezervareSerializer
from travel_app.utils.jwt_token import create_token


class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({
            "user": {
                "nume_utilizator": request.data['nume_utilizator'],
                "prenume_utilizator": request.data['prenume_utilizator'],
                "username": request.data['username'],
                "password": request.data['password']
            },
            "auth_token": create_token(request.data['username'], request.data['password'])
        })


class RezervareView(generics.GenericAPIView):
    serializer_class = RezervareSerializer

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({
            'succes'
        })


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request):
        is_valid = Utilizator.objects.filter(
            username=request.data['username'], password=request.data['password']).exists()

        if (is_valid):
            return Response({
                "user": {
                    "username": request.data['username'],
                    "password": request.data['password']
                },
                "auth_token": create_token(request.data['username'], request.data['password'])
            })
        return Response({
            "incorrect"
        })
