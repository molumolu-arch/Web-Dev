from django.urls import path
from .views import VacancyDetailedView, VacancyView, VacancyTop10View, CompanyDetailedView, CompanyVacanciesView, CompanyView

urlpatterns = [
    path('vacancies/', VacancyView.as_view(), name='vacancy-list'),
    path('vacancies/<int:id>', VacancyDetailedView.as_view(), name='vacancy-detail'),
    path('vacancies/top_ten', VacancyTop10View.as_view(), name='topvacancy-list'),
    path('companies/', CompanyView.as_view(), name='company-list'),
    path('companies/<int:id>', CompanyDetailedView.as_view(), name='comanty-detail'),
    path('companies/<int:id>/vacancies', CompanyVacanciesView.as_view(), name='comanty-vacancies'),
]   