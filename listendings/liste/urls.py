from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('rate/', views.rating, name='rating'),
    path('lists/', views.list_select, name='listeauswahl'),
    path('lists/<int:id>/', views.liste, name='listenuebersicht'),
    path('bd/', views.bd, name='bd')
]