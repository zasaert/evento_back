from django.urls import path
from . import views
from boards import views as board_views

urlpatterns = [

 path('',views.homepage, name='homepage'),
 path('register/',views.register, name='reg'),
 path('sign_in/',views.log_in, name='log_in'),
 path('board/',board_views.boards, name='board'),

]