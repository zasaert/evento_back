from django.contrib import admin
from django.urls import path,include
from boards import views
from .views import update_record



urlpatterns = [
  path('',views.boards,name='boards'),
  path('update_record/', update_record, name='update_record'),
	#path('test/',views.save_to_database,name=''),
  #path('test/',views.test)	
	
]
