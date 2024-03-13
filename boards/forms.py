from .models import Card
from django.forms import ModelForm,TextInput


class CardForm(ModelForm):
	class Meta:
		model = Card
		fields=['task','description']


		widgets = {
			"task": TextInput(attrs={'class':'form-control',
														'placeholder': 'Задание'
														}),
			
			"description": TextInput(attrs={'class':'form-control',
														'placeholder': 'Описание'
														})

		}