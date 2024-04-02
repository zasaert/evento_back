from django.shortcuts import render, redirect
from .models import Card
from .forms import CardForm
from rest_framework import generics
from .serializers import CardSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

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

@csrf_exempt
def update_record(request):
    if request.method == 'POST':
        record_id = request.POST.get('id')
        new_value = request.POST.get('status')
        
        try:
            record = Card.objects.get(id=record_id)
            record.status = new_value
            record.save()
            return JsonResponse({'success': True})
        except Card.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Record not found'})
    else:
        return JsonResponse({'success': False, 'error': 'Invalid request method'})

class CardAPIView(generics.ListAPIView):
	queryset = Card.objects.all()
	serializer_class = CardSerializer
