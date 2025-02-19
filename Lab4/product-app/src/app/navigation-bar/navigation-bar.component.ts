import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { inject } from '@angular/core';
import { Item } from '../item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  imports: [RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
    

}
