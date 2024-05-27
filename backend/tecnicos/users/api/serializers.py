from rest_framework import serializers
from users.models import User, Cliente, Tecnico

from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth.hashers import make_password

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'cedula', 'email', 'first_name', 'last_name', 'password', 'is_active', 'is_staff']

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super().create(validated_data)

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data.get('password'))
        return super().update(instance, validated_data)


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id', 'cedula', 'email', 'first_name', 'last_name', 'password', 'is_active', 'is_staff', 'direccion', 'codigo_postal']

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super().create(validated_data)

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data.get('password'))
        return super().update(instance, validated_data)
    
    
class ClienteRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['id', 'cedula', 'email', 'first_name', 'last_name', 'password', 'is_active', 'is_staff', 'direccion', 'codigo_postal']

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super().create(validated_data)

    def to_representation(self, instance):
        refresh = RefreshToken.for_user(instance)
        data = super().to_representation(instance)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)
        return data
    

class ClienteAsoService(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['first_name', 'last_name']


class TecnicoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tecnico
        fields = ['id', 'cedula', 'email', 'first_name', 'last_name', 'password', 'is_active', 'is_staff', 'image', 'profesion', 'experiencia']

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.get('password'))
        return super().create(validated_data)

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data.get('password'))
        return super().update(instance, validated_data)
    

class TecnicoAsoService(serializers.ModelSerializer):
    class Meta:
        model = Tecnico
        fields = ['first_name', 'last_name']

