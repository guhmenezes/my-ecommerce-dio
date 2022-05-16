import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/shared/login/login.component';
import { ProductInfoComponent } from './components/store/product-list/product-item/product-info/product-info.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  {
    path: 'home',
    component: StoreComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'product/:id',
    component: ProductInfoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
