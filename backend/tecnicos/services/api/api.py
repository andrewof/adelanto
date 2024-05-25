from rest_framework.viewsets import ModelViewSet

from .serializers import ServicesSerializer


class ServiciesViewSet(ModelViewSet):
  serializer_class = ServicesSerializer
  queryset = serializer_class.Meta.model.objects.all()