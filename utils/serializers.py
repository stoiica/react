from rest_framework import serializers
from .models import Imagini, LocatiiAutocar, Conditii, MasaSiTransport, ChangePassword, DeleteOrder, RatingBorder


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imagini
        fields = ['tara', 'oras', 'descriere', 'url']


class PretAutocarSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocatiiAutocar
        fields = ['oras', 'masa', 'statut', 'tip_transport']


class ConditiiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conditii
        fields = '__all__'


class MasaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MasaSiTransport
        fields = '__all__'


class UpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChangePassword
        fields = '__all__'


class DeleteOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeleteOrder
        fields = '__all__'


class RatingBorderSerializer(serializers.ModelSerializer):
    class Meta:
        model = RatingBorder
        fields = '__all__'
