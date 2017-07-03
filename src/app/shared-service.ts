import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {

  public cart: string[]= [];
  // Observable string sources
  private emitCartUpdate = new Subject<any>();
  private emitProductRemoved = new Subject<any>();
  // Observable string streams
  cartUpdated$ = this.emitCartUpdate.asObservable();
  productRemoved$ = this.emitProductRemoved.asObservable();
  // Service message commands

  addToCart(productName:string) {
    if (!this.cart.includes(productName)) {
      this.cart.push(productName);
      this.emitCartUpdate.next(productName);
      console.log(this.cart);
    }
  }
  removeItem(item){
    if(this.cart.includes(item)){
      var index = this.cart.indexOf(item, 0);
      if (index > -1) {
         this.cart.splice(index, 1);
      }
    }
    console.log(this.cart);
    this.emitProductRemoved.next(item);
  }
  logCart(){
    console.log(this.cart);
  }
}
