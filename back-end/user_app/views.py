from django.contrib.auth import authenticate, login, logout
from .models import AppUser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND,
    HTTP_204_NO_CONTENT,
)
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class Register(APIView):
    def post(self, request):
        data = request.data.copy()
        data["username"] = request.data.get("email")
        user = AppUser.objects.create_user(**data)
        token = Token.objects.create(user=user)
        login(request, user)
        return Response(
            {"email": user.email, "token": token.key}, status=HTTP_201_CREATED
        )


class LogIn(APIView):
    def post(self, request):
        data = request.data.copy()
        user = authenticate(username=data.get("email"), password=data.get("password"))
        if user:
            token, created = Token.objects.get_or_create(user=user)
            login(request, user)
            return Response({"email": user.email, "token": token.key})
        else:
            return Response("INVALID CREDENTIALS", status=HTTP_404_NOT_FOUND)


class UserPermission(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class Info(UserPermission):
    def get(self, request):
        return Response({"email": request.user.email})


class LogOut(UserPermission):
    def post(self, request):
        request.user.auth_token.delete()
        logout(request)
        return Response(status=HTTP_204_NO_CONTENT)
