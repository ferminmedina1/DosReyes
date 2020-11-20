import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { DrAboutComponent } from './components/dr-about/dr-about.component';
import { DrProductsComponent } from './components/dr-products/dr-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'labiales',
    pathMatch: 'full'
  },
  {
    path: 'labiales',
    component: DrProductsComponent
  },
  {
    path: 'about',
    component: DrAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
