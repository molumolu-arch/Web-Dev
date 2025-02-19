import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [CommonModule, NavigationBarComponent, RouterModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  categories: {name:string, image:string}[] = [{name: "kuromi",image:"/assets/kuromi.png"}, 
    {name:"cinamonroll",image:"/assets/cinammon.png"},
    {name:"pompompurin",image:"/assets/pompom.png"},
    {name:"hellokitty",image:"/assets/hellokitty.png"},
    {name:"pochacco", image:"/assets/pochacco.webp"}];

}
