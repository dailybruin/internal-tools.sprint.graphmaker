from rest_framework import serializers
from user_profile.models import User, Theme
from django.contrib.auth import get_user_model


class BasicInfoUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'profile_img', 'last_name', 'first_name', 'instagram', 'twitter')


class SafeUserSerializer(serializers.ModelSerializer):
    section = serializers.StringRelatedField()

    class Meta:
        model = User
        exclude = ('password', 'user_permissions')
