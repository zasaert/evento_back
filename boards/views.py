from django.shortcuts import render, redirect
from .models import Card
from .forms import CardForm
from rest_framework import generics
from .serializers import CardSerializer

# Create your views here.
def boards(request):
	error = ''
	if request.method == 'POST':
		form = CardForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect("boards")
		else:
			error = 'Форма была неверной'


	card = Card.objects.all()
	form = CardForm()
	data = {
		"card":card,
		"form":form,
		"error":error
	}

	return render(request,"boards/boards.html",data)



class CardAPIView(generics.ListAPIView):
	queryset = Card.objects.all()
	serializer_class = CardSerializer
