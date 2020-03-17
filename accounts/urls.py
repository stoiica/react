from django.urls import path, include
from .views import RegisterView, LoginView, RezervareView

urlpatterns = [
    path('auth/register', RegisterView.as_view(), name='register'),
    path('auth/login', LoginView.as_view(), name='login'),
    path('insert/reservation', RezervareView.as_view(), name='rezervare')
]
