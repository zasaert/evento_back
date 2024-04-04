from django.contrib import admin
from django.urls import path,include
from boards import views
from rest_framework.routers import DefaultRouter
from .views import UpdateRecordView



router = DefaultRouter()
router.register(r'cards', views.CardViewSet)

urlpatterns = [
  path('',views.boards,name='boards'),
  path('delete_record/<int:record_id>', views.delete_record, name='delete_record'),
  path('update_record/', UpdateRecordView.as_view(), name='update_record'),
]
