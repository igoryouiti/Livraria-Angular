import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'products',
        component: ProductComponent,
        children: [
          { path: '', component: ProductListComponent },
          { path: ':index', component: ProductDetailComponent }
        ]
      },
      { path: '', pathMatch: 'full', redirectTo: 'products' }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
