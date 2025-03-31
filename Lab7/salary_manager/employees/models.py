from django.db import models
import jsonfield

class Employee(models.Model):

    name = models.CharField(max_length = 255)
    salary = models.DecimalField(max_digits=10, decimal_places=2)
    bonuses = jsonfield.JSONField()
    
    def get_total_salary(self):
        bonus = sum(self.bonuses) if self.bonuses else 0
        print(self.salary + bonus)
        return self.salary + bonus
    
    def get_the_highest_bonus(self):
        return max(self.bonuses, default = 0)


