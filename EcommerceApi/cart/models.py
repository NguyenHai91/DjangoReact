
from django.contrib.auth import get_user_model
from django.db import models

from products.models import Product
from wishlist.models import Wishlist


User = get_user_model()


class CartManager(models.Manager):
  def get_existing_or_new(self, request, *args, **kwargs):
    created = False
    cart_id = request.session.get('cart_id')
    print(cart_id)
    if cart_id is not None:
      print('case: 1')
      if self.model.objects.filter(id=cart_id, used=False).count() == 1:
        cart = self.model.objects.get(id=cart_id)
    else:
      if request.user.is_authenticated and request.user:
        if self.model.objects.filter(user__email=request.user, used=False).count() == 1:
          cart = self.model.objects.get(user__email=request.user, used=False)
          print('case: 2')
        else:
          cart = self.model.objects.create(user=request.user)
          created = True
          print('case: 3')
      else:
        print('case: 4')
        cart = self.model.objects.create()
        created = True

      request.session['cart_id'] = cart.id
    return cart, created


class Cart(models.Model):
  user = models.ForeignKey(User, null=True, blank=True, on_delete=models.CASCADE)
  used = models.BooleanField(default=False)
  timestamp = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)

  objects = CartManager()

  def __str__(self):
    return str(self.id)

  @property
  def tax_total(self):
    total = 0
    for item in self.cart_items.all():
      total += int(item.quantity) * float(item.product.price) * \
               float(item.product.tax) / 100
    return round(total, 2)

  @property
  def num_item(self):
    num_item = 0
    for item in self.cart_items.all():
      num_item += item.quantity
    return num_item

  @property
  def total_amount(self):
    total = 0
    for item in self.cart_items.all():
      total += int(item.quantity) * float(item.product.price)

    total += self.tax_total
    return round(total, 2)



class CartItem(models.Model):
  cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="cart_items", null=True, blank=True)
  wishlist = models.ForeignKey(Wishlist, on_delete=models.CASCADE, related_name="wishlist_items", null=True, blank=True)
  product = models.ForeignKey(Product, on_delete=models.CASCADE)
  quantity = models.IntegerField(default=1)

  class Meta:
    unique_together = (('product', 'cart', 'wishlist'))
