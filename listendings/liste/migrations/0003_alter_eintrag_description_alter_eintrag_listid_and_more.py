# Generated by Django 5.0.1 on 2024-02-13 21:14

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('liste', '0002_alter_eintrag_description_alter_eintrag_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eintrag',
            name='description',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='eintrag',
            name='listid',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='liste.liste'),
        ),
        migrations.CreateModel(
            name='ListSelect',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('listid', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='liste.liste')),
            ],
        ),
    ]