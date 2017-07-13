import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import {SharedService} from '../shared-service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})

export class ProductCardsComponent implements OnInit {
  result: any;
  products: any;
  products2: any[];
  cart: any[] = [];
  productFamily = ["DATA", "HOSTING", "VOICE"];

  constructor(private http: Http, private _sharedService: SharedService) { }

  getProducts() {
    this.http.get("https://sfdccpq.herokuapp.com/ProductsServelet")
      .map(res => res.json())
      .subscribe(
      (response) => {
        //  alert(JSON.stringify(response));
        this.products = JSON.stringify(response.records);
        this.products2 = response.records;
      }, //For Success Response
      err => { console.error(err) } //For Error Response
      );
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.getProducts();
  }

  addToCart(productName: string) {
    this._sharedService.addToCart(productName);
  }
}
