from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.contrib.auth.models import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, password, **extra_fields)

class User(AbstractUser):
    cedula = models.CharField(max_length=30, unique=True, blank=False, null=False)
    email = models.EmailField(unique=True)
    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['cedula']

    # Remove 'username' field
    username = None

class Cliente(User):
    direccion = models.CharField(max_length=200, blank=True, null=True)
    codigo_postal = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'


class Tecnico(User):
    profesion = models.CharField(max_length=60, blank=False, null=False)
    experiencia = models.IntegerField()

    class Meta:
        verbose_name = 'Tecnico'
        verbose_name_plural = 'Tecnicos'

