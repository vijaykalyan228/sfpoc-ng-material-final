import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared-service";

@Component({
  selector: 'app-quote-pricing',
  templateUrl: './quote-pricing.component.html',
  styleUrls: ['./quote-pricing.component.css']
})
export class QuotePricingComponent implements OnInit {

  constructor(private _sharedService: SharedService) { }

  ngOnInit() {
    this.getPricing();
  }

  getPricing(){
    console.log(this._sharedService.getCart());
  }

}
