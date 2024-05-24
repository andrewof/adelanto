from django.db import models
from django.contrib.auth.models import AbstractUser 

class User(AbstractUser):
  cedula = models.CharField(max_length=25, unique=True, null=True)
  email = models.EmailField(unique=True)

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = []


class Cliente(User):
  direccion = models.CharField(max_length=100)
  codigo_postal = models.CharField(max_length=15)

  class Meta:
    verbose_name = ("Cliente")
    verbose_name_plural = ("Clientes")


class Tecnico(User):
  image = models.ImageField(upload_to='users')
  profesion = models.CharField(max_length=40)
  experiencia = models.IntegerField()

  class Meta:
    verbose_name = ("Tecnico")
    verbose_name_plural = ("Tecnicos")
