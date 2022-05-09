import re
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Url
from .serializers import UrlSerializer
import json
import uuid

@api_view(['GET'])
def get_urls(request):
    stays = Url.objects.all()
    serializer = UrlSerializer(stays,many = True)
    return Response(serializer.data)


@api_view(['POST'])
def encode(request):
    request_data = request.data
    unique_id = str(uuid.uuid4())[:5]

    if Url.objects.filter(long_url = request_data['long_url']).exists():
        the_obj = Url.objects.get(long_url = request_data['long_url'])

        frontend_data = {
            'code':'this exists',
            'url': 'https://shorty/' + the_obj.url_id
        }
        return Response(frontend_data)
    else:
        print(request_data['long_url'],'long url ')
        print(unique_id,'the unique id hopefully')

        new_url = {
            'long_url':request_data['long_url'],
            'url_id':unique_id,
        }
        new_obj = Url(**new_url)
        new_obj.save()

        frontend_data = {
            'code':'this does not exist',
            'url':'https://shorty/'+unique_id,
        }
        return Response(frontend_data)

@api_view(['POST'])
def decode(request):
    request_data = request.data
    url_key = request_data['short_url'][15:]

    if Url.objects.filter(url_id = url_key).exists():
        valid_url = Url.objects.get(url_id = url_key)
        long_url = valid_url.long_url

        frontend_data = {
            'code':'it was a valid link',
            'url':long_url
        }

        return Response(frontend_data)

    else:
        frontend_data = {
            'code':'link did not exist',
            'url':'sorry :( , not a valid shorty',
        }

        return Response(frontend_data)




