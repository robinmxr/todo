from django.urls import path
from .views import TodoView

urlpatterns = [
    path('todos/', TodoView.as_view()),
    path('todos/<int:pk>/', TodoView.as_view())
]