# Generated by Django 4.2.10 on 2024-02-08 21:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('evenements', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evenement',
            name='debut',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='evenement',
            name='fin',
            field=models.DateField(),
        ),
    ]
