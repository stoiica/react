from rest_framework import serializers
from .models import Utilizator, RezervareTot


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilizator
        fields = ['nume_utilizator',
                  'prenume_utilizator', 'username', 'password']


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class RezervareSerializer(serializers.ModelSerializer):
    class Meta:
        model = RezervareTot
        fields = '__all__'
