from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TextFileViewSet

router = DefaultRouter()
router.register(r'textfiles', TextFileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
