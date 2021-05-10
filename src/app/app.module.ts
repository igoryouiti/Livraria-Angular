import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { SideNavComponent } from './client/side-nav/side-nav.component';
import { ProductListComponent } from './client/product/product-list/product-list.component';
import { ProductDetailComponent } from './client/product/product-detail/product-detail.component';
import { ClientModule } from './client/client.module';
import { ClientComponent } from './client/client.component';
import { AdminModule } from './admin/admin.module';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './client/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './client/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ProductListComponent,
    ProductDetailComponent,
    ClientComponent,
    AdminComponent,
    PageNotFoundComponent,
    LoginComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ClientModule,
    AdminModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
