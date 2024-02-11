from django.db import models
from django.forms import ModelForm
from django import forms


class Liste(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50)

class Eintrag(models.Model):
    id = id = models.BigAutoField(primary_key=True)
    listid = models.ForeignKey(Liste, on_delete=models.CASCADE, blank=True)
    description = models.CharField(max_length=100)
    type = models.CharField(max_length=50, blank=True)
    done = models.BooleanField()

class EintragForm(ModelForm):
    class Meta:
        model = Eintrag
        fields = ['description', 'type', 'done', 'listid',]
        widgets = {'listid': forms.HiddenInput(),
                   'description': forms.TextInput(),
                   'type': forms.TextInput(),
                   'done': forms.HiddenInput()
                   }
        
class ListeForm(ModelForm):
    class Meta:
        model = Liste
        fields = ['id', 'name']
        widgets = {'id': forms.HiddenInput(),
                   'name': forms.TextInput(),
                   }


# Create your models here.
