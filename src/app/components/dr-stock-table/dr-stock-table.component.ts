import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dr-stock-table',
  templateUrl: './dr-stock-table.component.html',
  styleUrls: ['./dr-stock-table.component.css']
})
export class DrStockTableComponent implements OnInit {

  labial =  {
    "name" : "labial marshall",
    "category" : "labiales",
    "price" : "300",
    "stock" : "3",
    "image" : "./assets/Images/labialEJ.png"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
