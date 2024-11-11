from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.ContactMessageListCreate.as_view(), name='send_contact_message'),
]

