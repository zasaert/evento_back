from django.shortcuts import render
from .models import Card
from .forms import CardForm

# Create your views here.
def boards(request):
	error = ''
	if request.method == 'POST':
		form = CardForm(request.POST)
		if form.is_valid():
			form.save()
		else:
			error = 'Форма была неверной'


	card = Card.objects.all()
	form = CardForm()
	data = {
		"card":card,
		"form":form,
		"error":error
	}



	return render(request,"boards/boards1.html",data)

"""def create_boards(request):

	form = CardForm()


	return render(request,"boards/boards.html",{'form':form})"""