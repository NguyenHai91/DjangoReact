
from rest_framework import serializers
from rest_framework.fields import Field

from users.serializers import UserSerializer
from cart.serializers import CartItemSerializer
from wishlist.models import Wishlist


class WishlistSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  wishlist_items = CartItemSerializer(read_only=True, many=True)

  class Meta:
    model = Wishlist
    count_items = Field(source='count_items', default=0)
    fields = ['id', 'user', 'wishlist_items', 'count_items']