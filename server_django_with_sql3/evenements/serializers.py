from rest_framework import serializers
from .models import evenement


class evenementSerializer(serializers.ModelSerializer):
    class Meta:
        model = evenement
        fields = '__all__'