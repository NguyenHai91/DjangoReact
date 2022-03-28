
from django.shortcuts import render
import json

from category.models import Category
from products.models import Product
from django.core import serializers


def index(request):
  products = []

  men_category = Category.objects.filter(title__iexact='men').first()
  men_sub_categories = Category.objects.filter(parent=men_category)
  men_products = []

  for item in men_sub_categories:
    products_in_category = Product.objects.filter(category=item)[:2].values()
    if products_in_category:
      men_products += products_in_category

  products += men_products

  women_category = Category.objects.filter(title__iexact='women').first()
  women_sub_categories = Category.objects.filter(parent=women_category)
  women_products = []

  for item in women_sub_categories:
    products_in_category = Product.objects.filter(category=item)[:2].values()
    if products_in_category:
      women_products += products_in_category
  
  products += women_products

  accessory_category = Category.objects.filter(title__iexact='accessories').first()
  accessory_sub_categories = Category.objects.filter(parent=accessory_category)
  accessories = []
  accessories += Product.objects.filter(category=accessory_category).values()

  for item in accessory_sub_categories:
    products_in_category = Product.objects.filter(category=item)[:2].values()
    if products_in_category:
      accessories += products_in_category

  products += accessories
  context = {
    'men_items': men_products,
    'women_items': women_products,
    'accessories': accessories,
  }
  return render(request, 'index.html', context)


def product(request):

  return render(request, 'product.html')

def product_detail(request):

  return render(request, 'product-detail.html')

def blog(request):

  return render(request, 'blog.html')

def about(request):

  return render(request, 'about.html')

def contact(request):

  return render(request, 'contact.html')

def shoping_cart(request):
  items = request.session.get('cart-items')
  list_items = []
  for x in items:
    obj = Product.objects.get(id=x['product-id'])
    if obj:
      data = {
        'product': obj, 
        'quantity': x['quantity']
      }
      list_items.append(data)
  context = {
    'cart': list_items,
  }
  return render(request, 'shoping-cart.html', context)

def add_cart(request, id, num):
  del request.session['cart-items']
  if not request.session.get('cart-items'):
    request.session['cart-items'] = []
  items = request.session.get('cart-items')
  product = Product.objects.get(id=id)
  
  item = {
    'product-id': product.id,
    'quantity': num
  }
  items.append(item)
  request.session['cart-items'] = items
  list_items = []
  for x in items:
    obj = Product.objects.get(id=x['product-id'])
    if obj:
      data = {
        'product': obj, 
        'quantity': x['quantity']
      }
      list_items.append(data)
  context = {
    'cart': list_items,
  }
  return render(request, 'shoping-cart.html', context)

