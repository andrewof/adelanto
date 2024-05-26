from rest_framework.viewsets import ModelViewSet

from services.models import Services
from .serializers import ServiceSerializer, ServiceDetailSerializer


class ServiciesViewSet(ModelViewSet):
  serializer_class = ServiceSerializer
  queryset = Services.objects.all()

  def get_serializer_class(self):
    if self.action == 'list':
      return ServiceDetailSerializer
    return ServiceSerializer