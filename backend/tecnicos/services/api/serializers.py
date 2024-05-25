from rest_framework import serializers

from django.utils import timezone

from services.models import Services
from users.api.serializers import ClienteAsoService, TecnicoAsoService

class ServicesSerializer(serializers.ModelSerializer):
  cliente = ClienteAsoService(source='cliente_id', read_only=True)
  tecnico = TecnicoAsoService(source='tecnico_id', read_only=True)
  fechaHora_ac = serializers.SerializerMethodField()
  fechaHora_vis = serializers.SerializerMethodField()

  def get_fechaHora_ac(self, obj):
    local_time = timezone.localtime(obj.fechaHora_ac)
    return local_time.strftime("%Y-%m-%d %H:%M:%S")

  def get_fechaHora_vis(self, obj):
    local_time = timezone.localtime(obj.fechaHora_vis)
    return local_time.strftime("%Y-%m-%d %H:%M:%S")

  class Meta:
    model = Services
    fields = ['id', 'cliente', 'descripcion', 'fechaHora_ac', 'fechaHora_vis', 'tecnico']