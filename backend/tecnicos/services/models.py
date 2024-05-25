from django.utils import timezone
from django.db import models

from users.models import Cliente, Tecnico

class Services(models.Model):
  descripcion = models.CharField(max_length=300, null=True, blank=True)
  fechaHora_ac = models.DateTimeField(auto_now=True)
  fechaHora_vis = models.DateTimeField()
  cliente_id = models.ForeignKey(Cliente, on_delete=models.CASCADE)
  tecnico_id = models.ForeignKey(Tecnico, on_delete=models.CASCADE)

  def save(self, *args, **kwargs):
    self.fechaHora_ac = timezone.now()
    super().save(*args, **kwargs)

  class Meta:
    verbose_name = ('Servicio')
    verbose_name_plural = ('Servicios')