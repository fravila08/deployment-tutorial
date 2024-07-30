from django.urls import path
from .views import Info, Register, LogIn, LogOut

urlpatterns = [
    path("", Info.as_view()),
    path("register/", Register.as_view()),
    path("login/", LogIn.as_view()),
    path("logout/", LogOut.as_view()),
]
