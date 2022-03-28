
from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save

from products.models import Product

User = get_user_model()


class Payment(models.Model):
  STATUS = (('Valid', 'Valid'), ('Invalid', 'Invalid'))
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  payment_id = models.CharField(max_length=100)
  payment_method = models.CharField(max_length=250)
  amount_paid = models.CharField(max_length=100)
  status = models.CharField(max_length=100, choices=STATUS, default='Valid')
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self) -> str:
    return self.user.full_name


class BillingProfileManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter()


class BillingProfile(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  payment = models.ForeignKey(Payment, on_delete=models.CASCADE)
  name = models.CharField(max_length=255)
  email = models.EmailField()
  address_line_1 = models.CharField(max_length=255)
  address_line_2 = models.CharField(max_length=255, blank=True, null=True)
  city = models.CharField(max_length=255)
  timestamp = models.DateTimeField(auto_now_add=True)

  objects = BillingProfileManager()

  def __str__(self):
      return self.email


def billing_profile_created_receiver(sender, instance: BillingProfile, created, *args, **kwargs):
    pass


post_save.connect(billing_profile_created_receiver, sender=BillingProfile)


class OrderItem(models.Model):
  billing_profile = models.ForeignKey(BillingProfile, on_delete=models.CASCADE)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  payment = models.ForeignKey(Payment, on_delete=models.CASCADE, related_name='order_items')
  product = models.ForeignKey(Product, on_delete=models.CASCADE)
  quantity = models.IntegerField(default=1)
  price = models.CharField(max_length=50)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self) -> str:
    return self.product.name