from django.contrib import admin
from .models import Todo


# Register your models here.
models_list = [Todo]
admin.site.register(models_list)

