from django.shortcuts import render
from .models import evenement
from .serializers import evenementSerializer
from rest_framework import viewsets

# Create your views here.

class evenementView(viewsets.ModelViewSet):
    queryset = evenement.objects.all()
    serializer_class = evenementSerializer
