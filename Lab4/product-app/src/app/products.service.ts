import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "http://localhost:3000/products";
  
  constructor() { }

  async getAllProducts(): Promise<Item[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getProductsByCharacter( character:String ):Promise<Item[]> {
    
    const response = await fetch(`${this.url}?character=${character}`);
    const data = await response.json();
    console.log(data);
    return data ?? [];
  }

}
