# Generated by Django 5.0.3 on 2024-03-16 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('boards', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='card',
            options={'verbose_name': 'Карточки'},
        ),
        migrations.AddField(
            model_name='card',
            name='status',
            field=models.PositiveSmallIntegerField(default=0, verbose_name='status'),
            preserve_default=False,
        ),
    ]