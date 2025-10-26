from django.urls import path
from . import views

urlpatterns = [
    path('lcm/', views.lcm_interval, name='lcm-interval'),
]
