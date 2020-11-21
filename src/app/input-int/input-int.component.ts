import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Maquillaje } from '../components/dr-stock-table/intefaceTable';

@Component({
  selector: 'app-input-int',
  templateUrl: './input-int.component.html',
  styleUrls: ['./input-int.component.css']
})
export class InputIntComponent implements OnInit {

  constructor() { }

  @Input()
  quantity: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  stock: number;

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  
  upCantidad(): void{
    if(this.quantity < this.stock){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }else{
      this.maxReached.emit("SE ALCANZO EL MAX");
    }
  }
  downCantidad(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
  
  changeCantidad(event): void{
    
    if(event.keyCode > 47 && event.keyCode < 58)
    event.preventDefault;
  }

}
