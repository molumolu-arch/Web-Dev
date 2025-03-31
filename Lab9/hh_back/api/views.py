from django.http import JsonResponse
from django.views import View
from django.shortcuts import get_object_or_404
from .models import Company, Vacancy

class VacancyView(View):
    def get(self, request):
        vacancies = list(Vacancy.objects.values())
        return JsonResponse(vacancies, safe=False)

class VacancyDetailedView(View):
    def get(self, request, id):
        vacancy = get_object_or_404(Vacancy, pk=id)
        return JsonResponse({
            "id": vacancy.id,
            "name": vacancy.name,
            "salary": vacancy.salary,
            "description": vacancy.description,
            "company": vacancy.company.name
        })
    
class VacancyTop10View(View):
    def get(self,request):
        vacancies = list(Vacancy.objects.order_by("-salary").values())
        return JsonResponse(vacancies[:10], safe=False)

class CompanyView(View):
    def get(self, request):
        companies = list(Company.objects.values())
        return JsonResponse(companies, safe=False)

class CompanyDetailedView(View):
    def get(self, request, id):
        company = get_object_or_404(Company, pk=id)
        return JsonResponse({
            "name": company.name,
            "description": company.description,
            "city": company.city,
            "address": company.address,
        })

class CompanyVacanciesView(View):
    def get(self, request, id):
        vacancies = list(Vacancy.objects.filter(company_id = id).values())
        return JsonResponse(vacancies, safe=False)



