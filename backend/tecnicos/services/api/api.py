from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from services.models import Services
from .serializers import ServiceSerializer, ServiceDetailSerializer


class ServiciesViewSet(ModelViewSet):
  serializer_class = ServiceSerializer
  queryset = Services.objects.all()

  def get_serializer_class(self):
    if self.action == 'list':
      return ServiceDetailSerializer
    return ServiceSerializer
  
class ClienteServicesListView(ListAPIView):
  serializer_class = ServiceDetailSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    cliente = self.request.user.cliente
    return Services.objects.filter(cliente= cliente)
  
  def list(self, request, *args, **kwargs):
    queryset = self.get_queryset()
    serializer = self.get_serializer(queryset, many=True)
    return Response(serializer.data)
  

class TecnicoServicesListView(ListAPIView):
  serializer_class = ServiceDetailSerializer
  permission_classes = [IsAuthenticated]

  def get_queryset(self):
    tecnico = self.request.user.tecnico
    return Services.objects.filter(tecnico= tecnico)
  
  def list(self, request, *args, **kwargs):
    queryset = self.get_queryset()
    serializer = self.get_serializer(queryset, many=True)
    return Response(serializer.data)