import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Products } from './products.component';
import { ProductListItem } from './product-list-item.component';
import { ProductDetails } from './product-details.component';
import { ActionBarComponent } from './action-bar.component';

@NgModule({
  declarations: [
    AppComponent,
	Products,
	ProductListItem,
  ProductDetails,
  ActionBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
