import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { CategoryComponent } from "./category/category.component";
import { CharacterComponent } from "./character/character.component";

const routeConfig: Routes = [
    {
        path: '',
        component: ProductComponent,
        title: 'Home Page'
    }, 
    {
        path: 'categories',
        component: CategoryComponent,
        title: 'Characters'

    },
    {
        path: 'categories/:name',
        component: CharacterComponent,
        title: 'Characters'

    }
    
];

export default routeConfig;