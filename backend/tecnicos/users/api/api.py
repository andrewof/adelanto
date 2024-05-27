from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from django.contrib.auth.hashers import make_password

from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserSerializer, ClienteSerializer, TecnicoSerializer, ClienteSerializerWithToken
from users.models import Cliente


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


@api_view(['POST'])
def RegistroClientes(request):
  data = request.data
  try:
    cliente = Cliente.objects.create(
      cedula = data['cedula'],
      email = data['email'],
      first_name = data['first_name'],
      last_name = data['last_name'],
      password = make_password(data['password']),
      is_active = data['is_active'],
      direccion = data['direccion'],
      codigo_postal = data['codigo_postal']
    )
    serializer = ClienteSerializerWithToken(cliente, many=False)
    return Response(serializer.data)
  except Exception as e:
    return Response({'message':f'Error en el registro {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)


# class RegisterView(APIView):
#   def post(self, request, *args, **kwargs):
#     serializer = ClienteRegisterSerializer(data= request.data)
#     serializer.is_valid(raise_exception=True)
#     user = serializer.save()
#     return Response(serializer.data, status=status.HTTP_201_CREATED)
