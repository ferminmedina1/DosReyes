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
    prom :  true,
    cantidad: 0,
    },
    {
      name : "labial avon",
      category : "rimels",
      price : 400,
      stock : 1,
      image : "./assets/Images/labialEJ.png",
      prom :  false,
      cantidad: 0,
      },
    {
    name : "labial pink",
    category : "labiales",
    price : 600,
    stock : 0,
    image : "./assets/Images/labialEJ.png",
    prom :  false,
    cantidad: 0,
    },
    {
      name : "labial puente azul",
      category : "labiales",
      price : 80,
      stock : 20,
      image : "./assets/Images/labialEJ.png",
      prom :  false,
      cantidad: 0,
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  upCantidad(maquillaje: Maquillaje): void{
    if(maquillaje.stock > maquillaje.cantidad)
    maquillaje.cantidad++;
    else{
      maquillaje.cantidad = maquillaje.stock;
    }
  }
  downCantidad(maquillaje: Maquillaje): void{
    if(maquillaje.cantidad>0){
      maquillaje.cantidad--;
    }else{
      maquillaje.cantidad = 0;
    }
  }
  
  changeCantidad(event, maquillaje: Maquillaje): void{
    event.preventDefault;
    console.log("KEEEEEEE");
    console.log(event);
    
  }
}
