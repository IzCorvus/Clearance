from django.urls import path
from . import views


urlpatterns = [
    path('', views.hero, name='hero'),
    path('home/', views.home, name='home'),
    path('form/', views.form, name='form'),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
]