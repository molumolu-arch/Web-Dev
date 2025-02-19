import { Component } from '@angular/core';
import { Item } from '../item';
import { ProductsService } from '../products.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from "../item/item.component";
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-product',
  imports: [ItemComponent, CommonModule, NavigationBarComponent],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  itemList: Item[] = [];
  productsService: ProductsService = inject (ProductsService);
  filteredProducts: Item[] = [];

  constructor() {
    
    this.productsService.getAllProducts().then((itemList: Item[]) => {
      this.itemList = itemList;
      this.filteredProducts = itemList;
    });
  }

  filterResults(text:string){
    
    if(!text) this.filteredProducts = this.itemList;

    
    this.filteredProducts = this.itemList.filter(item => item?.name.toLowerCase().includes(text.toLowerCase()));

  }


}
