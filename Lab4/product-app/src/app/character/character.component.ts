import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { Item } from '../item';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-character',
  imports: [CommonModule, ItemComponent, NavigationBarComponent],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  service: ProductsService = inject(ProductsService);
  itemList: Item[] = [];
  character: string = "";

  constructor() {
    this.character = String(this.route.snapshot.params['name']);
    this.service.getProductsByCharacter(this.character).then((itemList: Item[]) => {
    this.itemList = itemList;});
    console.log(this.itemList);
  }

  deleteItem(id: number): void {
    this.itemList = this.itemList.filter(item => item.id !== id);
  }


}
