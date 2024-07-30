from user_app.views import UserPermission
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
    HTTP_500_INTERNAL_SERVER_ERROR,
)
from .serializers import TaskSerializer
from django.shortcuts import get_object_or_404


# Create your views here.
class AllTasks(UserPermission):
    def post(self, request):
        try:
            data = request.data.copy()
            data["user"] = request.user.id
            new_task = TaskSerializer(data=data)
            if new_task.is_valid():
                new_task.save()
                return Response(new_task.data, status=HTTP_201_CREATED)
            return Response(new_task.errors, status=HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            return Response(e, status=HTTP_500_INTERNAL_SERVER_ERROR)

    def get(self, request):
        try:
            tasks = TaskSerializer(request.user.tasks.all(), many=True)
            return Response(tasks.data)
        except Exception as e:
            print(e)
            return Response(e, status=HTTP_500_INTERNAL_SERVER_ERROR)


class ATask(UserPermission):
    def get(self, request, id):
        task = TaskSerializer(get_object_or_404(request.user.tasks, id=id))
        return Response(task.data)

    def put(self, request, id):
        try:
            task = TaskSerializer(
                get_object_or_404(request.user.tasks, id=id),
                data=request.data,
                partial=True,
            )
            if task.is_valid():
                task.save()
                return Response(task.data, status=HTTP_200_OK)
            return Response(task.errors, status=HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            return Response(e, status=HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, id):
        try:
            task = get_object_or_404(request.user.tasks, id=id)
            task.delete()
            return Response(status=HTTP_204_NO_CONTENT)
        except Exception as e:
            print(e)
            return Response(e, status=HTTP_500_INTERNAL_SERVER_ERROR)
