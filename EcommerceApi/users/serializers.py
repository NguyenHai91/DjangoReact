from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'full_name', 'email', 'phone']


class UserLoginSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(required=True)
  password = serializers.CharField(required=True)


class UserSerializerWithToken(UserSerializer):
  class Meta:
    model = User
    fields = ['id', 'full_name', 'email', 'phone']

  def get_token(self, obj):
    token = RefreshToken.for_user(obj)
    return token

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
  def validate(self, attrs):
    data = super().validate(attrs)

    serializer = UserSerializerWithToken(self.user).data
    for key, value in serializer.items():
      data[key] = value

    return data

