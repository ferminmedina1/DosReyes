import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrStockTableComponent } from './components/dr-stock-table/dr-stock-table.component';
import { DrHeadComponent } from './components/dr-head/dr-head.component';


@NgModule({
  declarations: [
    AppComponent,
    DrStockTableComponent,
    DrHeadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
