from rest_framework import serializers

from users.models import Cliente, Tecnico, User


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = '__all__'

  def create(self, validated_data):
    user = User(**validated_data)
    user.set_password(validated_data['password'])
    user.save()
    return user
  
  def update(self, instance, validated_data):
    update_user = super().update(instance, validated_data)
    update_user.set_password(validated_data['password'])
    update_user.save()
    return update_user


class UserListSerializer(serializers.ModelSerializer):
  class Meta:
    model = User


  def to_representation(self, instance):
    return {
      'id': instance['id'],
      'cedula': instance['cedula'],
      'name': instance['name'],
      'last_name': instance['last_name'],
      'email': instance['email']
    } 
    


class ClienteSerializer(serializers.ModelSerializer):
  class Meta:
    model = Cliente
    fields = ('id', 'name', 'last_name', 'email', 'password', 'direccion', 'codigo_postal')
    
  def create(self, validated_data):
    cliente = Cliente(**validated_data)
    cliente.set_password(validated_data['password'])
    cliente.save()
    return cliente
  
  def update(self, instance, validated_data):
    update_cliente = super().update(instance, validated_data)
    update_cliente.set_password(validated_data['password'])
    update_cliente.save()
    return update_cliente



class TecnicoSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tecnico
    fields = ('id', 'name', 'last_name', 'email', 'password', 'profesion', 'experiencia')

  def create(self, validated_data):
    tecnico = Tecnico(**validated_data)
    tecnico.set_password(validated_data['password'])
    tecnico.save()
    return tecnico
  
  def update(self, instance, validated_data):
    update_tecnico = super().update(instance, validated_data)
    update_tecnico.set_password(validated_data['password'])
    update_tecnico.save()
    return update_tecnico