from rest_framework import viewsets
from .models import TextFile
from .serializers import TextFileSerializer

class TextFileViewSet(viewsets.ModelViewSet):
    queryset = TextFile.objects.all()
    serializer_class = TextFileSerializer
