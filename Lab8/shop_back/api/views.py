from django.http import JsonResponse
from django.views import View
from django.shortcuts import get_object_or_404
from .models import Product, Category

class ProductListView(View):
    def get(self, request):
        products = list(Product.objects.values())  # Convert QuerySet to a list of dictionaries
        return JsonResponse(products, safe=False)

# Get one product by ID
class ProductDetailView(View):
    def get(self, request, id):
        product = get_object_or_404(Product, pk=id)
        return JsonResponse({
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "count": product.count,
            "is_active": product.is_active
        })

# List all categories
class CategoryListView(View):
    def get(self, request):
        categories = list(Category.objects.values())
        return JsonResponse(categories, safe=False)

# Get one category by ID
class CategoryDetailView(View):
    def get(self, request, id):
        category = get_object_or_404(Category, pk=id)
        return JsonResponse({"id": category.id, "name": category.name})

# List products by category ID
class CategoryProductsView(View):
    def get(self, request, id):
        products = list(Product.objects.filter(category_id=id).values())
        return JsonResponse(products, safe=False)
