from django.shortcuts import render, redirect
from .models import Card
from .forms import CardForm
from rest_framework import generics
from .serializers import CardSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response


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

class UpdateRecordView(APIView):
    def post(self, request):
        record_id = request.data.get('record_id')
        new_value = request.data.get('new_value')
        print(record_id, " ", new_value)
        try:
            record = Card.objects.get(id=record_id)
            record.status = new_value
            record.save()
            serializer = CardSerializer(record)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Card.DoesNotExist:
            return Response({'error': 'Record not found'}, status=status.HTTP_404_NOT_FOUND)

class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class CardAPIView(generics.ListAPIView):
	queryset = Card.objects.all()
	serializer_class = CardSerializer
