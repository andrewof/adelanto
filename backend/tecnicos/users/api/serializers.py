from rest_framework import serializers
from users.models import User, Cliente, Tecnico

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'cedula', 'email', 'first_name', 'last_name', 'password', 'is_active', 'is_staff']

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id', 'cedula', 'email', 'first_name', 'last_name', 'password', 'is_active', 'is_staff', 'direccion', 'codigo_postal']

class TecnicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tecnico
        fields = ['id', 'cedula', 'email', 'first_name', 'last_name', 'password', 'is_active', 'is_staff', 'image', 'profesion', 'experiencia']