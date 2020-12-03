import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { Component, OnInit } from '@angular/core';
import { DrDataService } from '../../services/dr-data.service';
import { DrCartService } from '../../services/dr-cart.service';

import { Maquillaje } from './intefaceTable';

@Component({
  selector: 'app-dr-stock-table',
  templateUrl: './dr-stock-table.component.html',
  styleUrls: ['./dr-stock-table.component.css']
})
export class DrStockTableComponent implements OnInit {

  title = 'Lista de labiales';

  maquillajes: Maquillaje[]=  [];

  constructor(private cart: DrCartService, private maquillajeDataService: DrDataService) {

   }
 
  ngOnInit(): void {
    this.maquillajeDataService.getAll().subscribe(data => this.maquillajes = data);
  }

  addToCart(maquillaje): void{
    if(maquillaje.cantidad != 0){
    this.cart.addToCart(maquillaje);
    maquillaje.stock -= maquillaje.cantidad;
    maquillaje.cantidad = 0;
    }
  }

  maxReached(men: string): void{
    alert(men);
  }
}
