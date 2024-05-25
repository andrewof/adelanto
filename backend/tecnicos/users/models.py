from django.db import models
from django.contrib.auth.models import AbstractUser 

class User(AbstractUser):
  username = models.CharField(max_length=150, unique=True, null=True, blank=True)
  password = models.CharField(max_length=128, null=True, blank=True)
  cedula = models.CharField(max_length=25, unique=True, null=True)
  email = models.EmailField(unique=True)

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = []

  def __init__(self, *args, **kwargs):
    super().__init__(*args, **kwargs)
    self._meta.get_field('username').blank = True
    self._meta.get_field('username').null = True
    self._meta.get_field('password').blank = True
    self._meta.get_field('password').null = True

  def save(self, *args, **kwargs):
    if not self.password:
      self.set_unusable_password()
    super().save(*args, **kwargs)



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

