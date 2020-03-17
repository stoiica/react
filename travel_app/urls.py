from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('accounts.urls')),
    path('', include('utils.urls'))
]
