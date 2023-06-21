from django.db import models

# Create your models here.
class Todo(models.Model):
    todoId = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    details = models.CharField(max_length=100)
    status = models.CharField(max_length=100)






