from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserSerializer, ClienteSerializer, TecnicoSerializer

from django.contrib.auth.hashers import make_password


class CustomTokenObtainPairView(TokenObtainPairView):
  pass

class UserViewSet(ModelViewSet):
  serializer_class = UserSerializer
  queryset = serializer_class.Meta.model.objects.filter(is_active = True)
  

class UserView(APIView):
  permission_classes = [IsAuthenticated]

  def get(self, request):
    user_serializer = UserSerializer(request.user)
    return Response(user_serializer.data)
  

class ClienteViewSet(ModelViewSet):
  serializer_class = ClienteSerializer
  queryset = serializer_class.Meta.model.objects.filter(is_active = True)
  

class TecnicoViewSet(ModelViewSet):
  serializer_class = TecnicoSerializer
  queryset = serializer_class.Meta.model.objects.filter(is_active = True)

