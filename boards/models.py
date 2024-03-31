from django.db import models

# Create your models here.

class Card(models.Model):
	task = models.CharField("task",max_length = 100)
	description = models.CharField("description",max_length = 200)
	status = models.PositiveSmallIntegerField("status",default = 0)

	def __str__(self):
		return self.task
	
	class Meta:
		verbose_name = "card"