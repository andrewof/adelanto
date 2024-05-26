from django.db import models
from users.models import Cliente, Tecnico

class Services(models.Model):
  cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
  tecnico = models.ForeignKey(Tecnico, on_delete=models.CASCADE)
  descripcion = models.TextField()
  hora_actual = models.DateTimeField(auto_now_add=True)
  hora_vis = models.DateTimeField()

  class Meta:
    verbose_name = ('Servicio')
    verbose_name_plural = ('Servicios')