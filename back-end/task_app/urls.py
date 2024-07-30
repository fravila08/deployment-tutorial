from django.urls import path
from .views import AllTasks, ATask

urlpatterns = [
    path("", AllTasks.as_view()),
    path("<int:id>/", ATask.as_view()),
]
