import { Component, OnInit } from '@angular/core';
import { Maquillaje } from './intefaceTable';

@Component({
  selector: 'app-dr-stock-table',
  templateUrl: './dr-stock-table.component.html',
  styleUrls: ['./dr-stock-table.component.css']
})
export class DrStockTableComponent implements OnInit {

  maquillajes: Maquillaje[]=  [
    {
    name : "labial marshall",
    category : "labiales",
    price : 300,
    stock : 3,
    image : "./assets/Images/labialEJ.png",
    prom :  true
    },
    {
      name : "rimel avon",
      category : "rimels",
      price : 400,
      stock : 1,
      image : "./assets/Images/labialEJ.png",
      prom :  false
      },
    {
    name : "labial pink",
    category : "labiales",
    price : 600,
    stock : 0,
    image : "./assets/Images/labialEJ.png",
    prom :  false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
