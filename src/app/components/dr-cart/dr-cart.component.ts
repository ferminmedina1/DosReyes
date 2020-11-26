import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { DrCartService } from 'src/app/dr-cart.service';
import { Maquillaje } from '../dr-stock-table/intefaceTable';

@Component({
  selector: 'app-dr-cart',
  templateUrl: './dr-cart.component.html',
  styleUrls: ['./dr-cart.component.css']
})
export class DrCartComponent implements OnInit {

  title = 'Carrito';

  compra$: Observable<Maquillaje[]>;

  constructor(private cart: DrCartService) { 
    this.compra$ = cart.compra.asObservable();
  }

  ngOnInit(): void {
  }
}
