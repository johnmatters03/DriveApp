from rest_framework import serializers
from .models import TextFile

class TextFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextFile
        fields = ['id', 'title', 'content', 'created_at']
