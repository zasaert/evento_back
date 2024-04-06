from django.shortcuts import render,redirect
from .forms import CreateUserForm,LoginForm
from django.contrib.auth.models import auth
from django.contrib.auth import authenticate, login
# Create your views here.


def homepage(request):
	return render(request, 'homepage.html')

def register(request):
	form = CreateUserForm()
	if request.method =="POST":
		form = CreateUserForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('log_in')

	context = {'registerform': form }
	return render(request, 'register.html', context)

def	log_in(request):
	form = LoginForm()

	if request.method =='POST':
		form =LoginForm(request,data=request.POST)
		if form.is_valid():
			username = request.POST.get('username')
			password = request.POST.get('password')

			user = authenticate(request, username=username, password=password)
			if user is not None:
				auth.login(request,user)
				return redirect('boards')
			
	context = {'loginform': form }
	return render(request, 'login.html', context)



