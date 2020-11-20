import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dr-cart',
  templateUrl: './dr-cart.component.html',
  styleUrls: ['./dr-cart.component.css']
})
export class DrCartComponent implements OnInit {

  title = 'Carrito';

  constructor() { }

  ngOnInit(): void {
  }

}
