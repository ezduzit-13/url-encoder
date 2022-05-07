from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Url
from .serializers import UrlSerializer

@api_view(['GET'])
def get_urls(request):
    stays = Url.objects.all()
    serializer = UrlSerializer(stays,many = True)
    return Response(serializer.data)