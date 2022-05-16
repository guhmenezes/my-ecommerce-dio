import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { StoreComponent } from './components/store/store.component';
import { FiltersComponent } from './components/store/filters/filters.component';
import { ProductListComponent } from './components/store/product-list/product-list.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ProductItemComponent } from './components/store/product-list/product-item/product-item.component';
import { LoginComponent } from './components/shared/login/login.component';
import { LoginButtonComponent } from './components/shared/login/login-button.component';
import { NgxMaskModule } from 'ngx-mask';
import { SearchComponent } from './components/store/filters/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductInfoComponent } from './components/store/product-list/product-item/product-info/product-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StoreComponent,
    FiltersComponent,
    ProductListComponent,
    NavComponent,
    ProductItemComponent,
    LoginComponent,
    LoginButtonComponent,
    SearchComponent,
    ProductInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
