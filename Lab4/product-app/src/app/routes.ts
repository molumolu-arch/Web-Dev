import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";

const routeConfig: Routes = [
    {
        path: '',
        component: ProductComponent,
        title: 'Home Page'
    }
  
];

export default routeConfig;