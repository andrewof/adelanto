from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response

from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserSerializer, ClienteSerializer, TecnicoSerializer

class CustomTokenObtainPairView(TokenObtainPairView):
  pass

class UserViewSet(ModelViewSet):
  serializer_class = UserSerializer
  queryset = serializer_class.Meta.model.objects.filter(is_active = True)
  

class UserView(APIView):
  permission_classes = [IsAuthenticated]

  def get(self, request):
    user = request.user
    if hasattr(user, 'cliente'):
      serializer = ClienteSerializer(user.cliente)
    elif hasattr(user, 'tecnico'):
      serializer = TecnicoSerializer(user.tecnico)
    else:
      serializer = UserSerializer(user)
    return Response(serializer.data)
  

class ClienteViewSet(ModelViewSet):
  serializer_class = ClienteSerializer
  queryset = serializer_class.Meta.model.objects.filter(is_active = True)
  

class TecnicoViewSet(ModelViewSet):
  permission_classes = [IsAuthenticatedOrReadOnly]
  serializer_class = TecnicoSerializer
  queryset = serializer_class.Meta.model.objects.filter(is_active = True)
