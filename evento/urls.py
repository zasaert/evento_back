"""
URL configuration for evento project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from login import views
from boards.views import CardAPIView


urlpatterns = [
    path('', views.homepage, name='home'),
	path('admin/',admin.site.urls),
    path('login/',include('login.urls')),
	path('boards/',include('boards.urls')),
	path('api/v1/list/',CardAPIView.as_view()),
]
