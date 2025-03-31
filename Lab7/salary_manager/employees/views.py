from django.shortcuts import render
from .models import Employee

def employee_list(request):
    employees = Employee.objects.all()
    employee_data = [
        {"name": emp.name, "total_salary":emp.get_total_salary()} for emp in employees
    ]
    print(employee_data)
    return render(request, "employee_list.html", {"employees": employee_data})

