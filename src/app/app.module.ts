import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrStockTableComponent } from './components/dr-stock-table/dr-stock-table.component';
import { FormsModule } from '@angular/forms';
import { DrAboutComponent } from './components/dr-about/dr-about.component';
import { DrCartComponent } from './components/dr-cart/dr-cart.component';
import { DrProductsComponent } from './components/dr-products/dr-products.component';
import { InputIntComponent } from './components/input-int/input-int.component';

@NgModule({
  declarations: [
    AppComponent,
    DrStockTableComponent,
    DrAboutComponent,
    DrCartComponent,
    DrProductsComponent,
    InputIntComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
