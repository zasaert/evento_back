from django.contrib import admin
from django.urls import path,include
from boards import views



urlpatterns = [
  path('',views.boards,name='boards'),
	#path('test/',views.save_to_database,name=''),
  #path('test/',views.test)	
	
]
