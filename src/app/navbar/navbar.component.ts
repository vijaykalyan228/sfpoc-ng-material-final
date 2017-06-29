import { Component, OnDestroy } from '@angular/core';
import { SharedService } from "../shared-service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy{

  cart: any[] = [];
  subscription: Subscription;
  lblQuote: string = "Quote";

  constructor(private _sharedService: SharedService) {
    // this.subscription = this._sharedService.productAdded$.subscribe(
    this.subscription = this._sharedService.cartUpdated$.subscribe(
      item => {
        if (!this.cart.includes(item)) {
          this.cart.push(item);
        }
        this.updateLblQuote();
    });
  }

  updateLblQuote(){
    this.lblQuote = this.cart.length==0?"Quote":"Quote - " + this.cart.length;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    console.log("NavbarComponent destroyed!")
    this.subscription.unsubscribe();
  }

  removeItem(item: any){
    if(this.cart.includes(item)){
      var index = this.cart.indexOf(item, 0);
      if (index > -1) {
         this.cart.splice(index, 1);
      }
      this.updateLblQuote();
    }
    this._sharedService.removeItem(item);
  }
}
