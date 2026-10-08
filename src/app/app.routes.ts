import { Routes } from '@angular/router';
import { SignIn } from './pages/sign-in/sign-in';
import { SignUp } from './pages/sign-up/sign-up';
import { Products } from './pages/products/products';
import { ShopLayout } from './layout/shop-layout/shop-layout';

export const routes: Routes = [
  {
    path: 'sign-in',
    component: SignIn
  },
  {
    path: 'sign-up',
    component: SignUp
  },
  {
    path: 'products',
    component: Products
  },
  {
    path: '',
    component: ShopLayout
  }
];

