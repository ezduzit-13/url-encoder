from django.urls import path,include
from . import views


urlpatterns = [
    path('url/', views.get_urls),
    path('encode/',views.encode),
]

