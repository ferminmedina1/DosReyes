import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Maquillaje } from '../components/dr-stock-table/intefaceTable';

const URL = 'https://run.mocky.io/v3/48c75367-29de-41cd-bb3f-16d0a01065fd';

@Injectable({
  providedIn: 'root'
})
export class DrDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Maquillaje[]> {
    
    return this.http.get<Maquillaje[]>(URL).pipe(
      tap((maquillajes: Maquillaje[]) => maquillajes.forEach(elem => elem.cantidad = 0))
    );
  }
}
  