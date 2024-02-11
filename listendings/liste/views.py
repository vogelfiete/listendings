from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, HttpResponseRedirect
from django.template import loader
from .models import Liste, Eintrag, EintragForm, ListeForm
import json



def index(request):
    template = loader.get_template('index.html')
   
    return HttpResponse(template.render())


def rating(request):
    template = loader.get_template('rating.html')
    liste = Liste.objects.get(id=1)
    desc_eintraege = list(liste.eintrag_set.values('description'))
    erstereintrag = desc_eintraege[0]
    

    context = {
        'liste': liste,
        'eintraege': desc_eintraege,
        'erstereintrag': erstereintrag,

    }
    return HttpResponse(template.render(context, request))




def list_select(request):
    template = loader.get_template("liste_auswahl.html")
    listen = Liste.objects.all().values()

    if request.method == "POST":
        formular = ListeForm(request.POST)
        if formular.is_valid():
           formular.save()
           return HttpResponseRedirect(f'/lists/')
    else:
        formular = ListeForm()

    context = {
        "allelisten": listen,
        "ListeForm": ListeForm,
    }
    return HttpResponse(template.render(context, request))

def liste(request, id):
    liste = Liste.objects.get(id=id)
    eintraege = liste.eintrag_set.all()
    template = loader.get_template('liste.html')



    if request.method == "POST":
        formular = EintragForm(request.POST)
        if formular.is_valid():
           data = formular.save(commit=False)
           data.listid = liste
           data.save()
           formular.save_m2m()
           return HttpResponseRedirect(f'/lists/{id}')
    else:
        formular = EintragForm()

    context = {
        'liste': liste,
        'eintraege': eintraege,
        'EintragForm': formular,
    }
    return HttpResponse(template.render(context, request))