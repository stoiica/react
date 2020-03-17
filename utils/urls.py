from django.urls import path, include
from .views import ImageListView, PretAutocarView, MasaView, UpdateView, DeleteView

urlpatterns = [
    path('resources/images', ImageListView.as_view(), name='images'),
    path('resources/pret_autocar', PretAutocarView.as_view(), name='pret1'),
    path('resources/masa_transport_id', MasaView.as_view(), name='masa'),
    path('resources/change_password', UpdateView.as_view(), name="update"),
    path('resources/delete', DeleteView.as_view(), name='delete')
    #path('resources/conditii', ConditiiView.as_view(), name="conditii")
]
