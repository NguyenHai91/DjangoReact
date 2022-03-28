from django.contrib import admin

from .models import Product, Tag


class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', '__str__', 'timestamp', 'category', 'quantity', 'original_price',
                    'price', 'views', 'gender', 'featured', 'sold', 'image']

    class meta:
        model = Product


admin.site.register(Product, ProductAdmin)
admin.site.register(Tag)
