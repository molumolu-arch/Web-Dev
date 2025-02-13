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
    console.log("fdkfjskfj");
    return await data.json() ?? [];
  }

  async getProductById( id:Number ):Promise<Item | undefined> {
    
     const data = await fetch(`${this.url}/${id}`);
     return await data.json() ?? {};
  }

}
