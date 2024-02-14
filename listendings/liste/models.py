from django.db import models
from django.forms import ModelForm
from django import forms


class Liste(models.Model):
    id = models.BigAutoField(primary_key=True)
    Name = models.CharField(max_length=50)

    def __str__(self):
       return self.Name

class ListSelect(models.Model):
    id = models.BigAutoField(primary_key=True)
    listid = models.ForeignKey(Liste, on_delete=models.CASCADE)

class Eintrag(models.Model):
    id = id = models.BigAutoField(primary_key=True)
    listid = models.ForeignKey(Liste, on_delete=models.CASCADE, blank=True)
    Beschreibung = models.CharField(max_length=100)
    done = models.BooleanField()

class EintragForm(ModelForm):
    class Meta:
        model = Eintrag
        fields = ['Beschreibung', 'done', 'listid',]
        widgets = {'listid': forms.HiddenInput(),
                   'Beschreibung': forms.TextInput(),
                   'done': forms.HiddenInput()
                   }
        
class ListeForm(ModelForm):
    class Meta:
        model = Liste
        fields = ['id', 'Name']
        widgets = {'id': forms.HiddenInput(),
                   'Name': forms.TextInput(),
                   }
        
class SelectListeForm(forms.ModelForm):
    class Meta:
        model = ListSelect
        fields = ['id', 'listid']
        
       

        liste = forms.ModelChoiceField(
            queryset=Liste.objects.all().values_list('Name'),
            to_field_name='Liste',
            required=True,
            widget=forms.Select(attrs={'class': 'form-control'}),
            initial=0,
        )


# Create your models here.
