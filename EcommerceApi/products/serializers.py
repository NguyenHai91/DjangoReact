from rest_framework import serializers
from rest_framework.fields import Field, ListField, SerializerMethodField

from .models import Product, Tag


class TagSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tag
    fields = ['title', 'slug', 'product']


class ProductSerializer(serializers.ModelSerializer):
  tag_list = TagSerializer(many=True, read_only=True)
  image = serializers.ImageField(use_url=True)

  class Meta:
    model = Product
    fields = ['id', 'image', 'title', 'slug', 'tax', 'views', 'quantity', 'sold',
              'featured', 'description', 'original_price', 'price', "tag_list"]

  def validate(self, data):
    if not data.get('title'):
      raise serializers.ValidationError('title not null')
    else:
      return data


