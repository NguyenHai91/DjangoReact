"""Shop URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import  static
from django.conf import settings

from . import views



urlpatterns = [
    path('admin/', admin.site.urls),
    # api
    path('api/users/', include('users.urls')),
    path('api/products/', include('products.urls')),
    path('api/category/', include('category.urls')),
    path('api/cart/', include('cart.urls')),
    path('api/checkout/', include('billing.urls')),
    path('api/wishlist/', include('wishlist.urls')),
    
    # template
    # path('', views.index),
    path('product/', views.product),
    path('product-detail/', views.product_detail),
    path('blog/', views.blog),
    path('about/', views.about),
    path('contact/', views.contact),
    path('shoping-cart/', views.shoping_cart),
    path('add-cart/id=<id>/num=<int:num>/', views.add_cart),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

