# Generated by Django 4.0.3 on 2022-03-09 02:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0003_alter_cartitem_wishlist_delete_wishlist'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitem',
            name='cart',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cart_items', to='cart.cart'),
        ),
    ]
