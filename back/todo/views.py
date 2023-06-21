
from .models import Todo
from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse

from .serializers import TodoSerializer


class TodoView(APIView):

    def post(self, request):
        data = request.data
        serializer = TodoSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Todo Added Successfully",          safe=False)
        return JsonResponse("Failed to Add Todo", safe=False)



    def get_todo(self, pk):
        try:
            global Todo
            Todo = Todo.objects.get(todoId=pk)
            return Todo
        except Todo.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_todo(pk)
            serializer = TodoSerializer(data)
        else:
            data = Todo.objects.all()
            serializer = TodoSerializer(data, many=True)
        return Response(serializer.data)


    def put(self, request, pk=None):
        todo_to_update = Todo.objects.get(todoId=pk)
        serializer = TodoSerializer(instance=todo_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Todo updated Successfully", safe=False)
        return JsonResponse("Failed To Update Todo")


    def delete(self, request, pk):
        todo_to_delete = Todo.objects.get(todoId=pk)
        todo_to_delete.delete()
        return JsonResponse("Todo Deleted Successfully", safe=False)