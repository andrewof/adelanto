from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import action, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .serializers import ClienteSerializer, TecnicoSerializer, UserSerializer, UserListSerializer
from users.models import User

from django.shortcuts import get_object_or_404


class UsersViewSet(GenericViewSet):
  model = User
  serializer_class = UserSerializer
  list_serializer_class = UserListSerializer
  queryset = serializer_class().Meta.model.objects\
    .filter(is_active= True).values('id','cedula','name','last_name','email')
  

  def get_object(self, pk=None):
    return get_object_or_404(self.list_serializer_class.Meta.model, id= pk)

  @action(detail=False, methods=['post'])
  def register(self, request):
    data = request.data
    user_serializer = self.serializer_class(data= data, many= False)
    if user_serializer.is_valid():
      user = user_serializer.save()
      refresh = RefreshToken.for_user(user)
      return Response({
        'message':'Usuario registrado',
        'refresh': str(refresh),
        'access': str(refresh.access_token)
      }, status=status.HTTP_201_CREATED)
    return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


  @action(detail=False, methods=['post'])
  def login(self, request):
    user_serializer = TokenObtainPairSerializer(data= request.data)
    if user_serializer.is_valid():
      tokens = user_serializer.validated_data
      return Response({
        'message':'Inicio de sesión exitoso.',
        'refresh': tokens['refresh'],
        'access': tokens['access']
      }, status=status.HTTP_200_OK)
    return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  

  @action(detail=False, methods=['get'])
  @permission_classes([IsAuthenticated])
  def listar(self, request):
    user = self.queryset
    user_serializer = UserListSerializer(user, many= True)
    return Response(user_serializer.data, status=status.HTTP_200_OK)

  
  @action(detail=True, methods=['get'])
  @permission_classes([IsAuthenticated])
  def listarSolo(self, request, pk=None):
    user = self.get_object(pk)
    user_serializer = self.list_serializer_class(user, many= False)
    return Response(user_serializer.data, status= status.HTTP_200_OK)
  

  @action(detail=True, methods=['put'])
  def actualizar(self, request, pk=None):
    user = self.get_object(pk)
    user_serializer = UserSerializer(user, data= request.data, partial=True)
    if user_serializer.is_valid():
      user_serializer.save()
      return Response({
        'message':'datos actualizdos.'
      }, status=status.HTTP_200_OK)
    return Response({
      'message':'errores en la actualización.',
      'errors': user_serializer.errors
      }, status=status.HTTP_400_BAD_REQUEST)
  

