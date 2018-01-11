import { Routes } from '@angular/router';
import { ProductComponent} from './product/product.component';
import {ProductDetailsComponent} from './product-details/product-details.component';


export const appRoutes: Routes = [
  { 
    path: 'product/:productId', component: ProductDetailsComponent 
  },
  {
    path: 'products',
    component: ProductComponent
  }
];