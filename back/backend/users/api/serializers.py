from rest_framework import serializers

from users.models import Cliente, Tecnico, User


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'cedula','first_name', 'last_name', 'email', 'password', 'is_active', 'is_staff')
    

class ClienteSerializer(serializers.ModelSerializer):
  class Meta:
    model = Cliente
    fields = ('id', 'cedula','first_name', 'last_name', 'email', 'password', 'direccion', 'codigo_postal', 'is_active')


class TecnicoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tecnico
    fields = ('id', 'cedula','first_name', 'last_name', 'email', 'password', 'profesion', 'experiencia', 'is_active')