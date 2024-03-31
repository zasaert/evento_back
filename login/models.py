from django.db import models

# Create your models here.

class Users(models.Model):
	name = models.CharField("Name",max_length = 100)
	password = models.CharField("password",max_length = 100)

	def __str__(self):
		return self.name
	
	class Meta:
		verbose_name = "user"