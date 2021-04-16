import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: ClientComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'products/:index', component: ProductDetailComponent },
      { path: '', pathMatch: 'full', redirectTo: 'products' }

    ]
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
