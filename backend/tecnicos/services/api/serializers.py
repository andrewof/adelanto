from rest_framework import serializers
from services.models import Services

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Services
        fields = ['id', 'cliente', 'tecnico', 'descripcion', 'hora_actual', 'hora_vis']

class ServiceDetailSerializer(serializers.ModelSerializer):
    cliente_first_name = serializers.ReadOnlyField(source='cliente.first_name')
    cliente_last_name = serializers.ReadOnlyField(source='cliente.last_name')
    tecnico_first_name = serializers.ReadOnlyField(source='tecnico.first_name')
    tecnico_last_name = serializers.ReadOnlyField(source='tecnico.last_name')

    class Meta:
        model = Services
        fields = ['id', 'cliente_first_name', 'cliente_last_name', 'tecnico_first_name', 'tecnico_last_name', 'descripcion', 'hora_actual', 'hora_vis']