from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from evenements.views import evenementView
from rest_framework import routers

route = routers.DefaultRouter()
route.register('', evenementView, basename='evenementview')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
