
from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class WishlistManager(models.Manager):
  def get_wishlist_or_create(self, request):
    created = False
    wishlist_id = request.session.get('wishlist_id')
    if wishlist_id is not None:
      print('case: 1')
      if self.model.objects.filter(id=wishlist_id).count() == 1:
        wishlist = self.model.objects.get(id=wishlist_id)
    else:
      if request.user.is_authenticated and request.user:
        if self.model.objects.filter(user__email=request.user).count() == 1:
          wishlist = self.model.objects.get(user__email=request.user)
          print('case: 2')
        else:
          wishlist = self.model.objects.create(user=request.user)
          created = True
          print('case: 3')
      else:
        print('case: 4')
        wishlist = self.model.objects.create()
        created = True

      request.session['wishlist_id'] = wishlist.id
    return wishlist, created



class Wishlist(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
  timestamp = models.DateTimeField(auto_now_add=True)
  updated = models.DateTimeField(auto_now=True)

  objects = WishlistManager()

  def __str__(self):
    return str(self.id)

  @property
  def count_items(self):
    count = 0
    for item in self.wishlist_items.all():
      count += item.quantity
    return count