import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Maquillaje } from '../components/dr-stock-table/intefaceTable';

@Injectable({
  providedIn: 'root'
})
export class DrCartService {
 
  private _compra: Maquillaje[] = [];

  compra: BehaviorSubject<Maquillaje[]> = new BehaviorSubject ([]);
 
  constructor() { } 
  
  addToCart(maquillaje: Maquillaje) {
    let item: Maquillaje = this._compra.find((v1) => v1.name == maquillaje.name);
    if(!item){
      this._compra.push({...maquillaje});
    }else{
      item.cantidad += maquillaje.cantidad;
    }
    this.compra.next(this._compra);
  }
}

