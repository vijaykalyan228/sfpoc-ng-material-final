import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CtlEthernet } from "./ctl-ethernet.interface";

@Injectable()
export class CtlEthernetSharedService {

  public ctlEthernet: CtlEthernet;
  // Observable string sources
  private emitUpdate = new Subject<any>();
  // Observable string streams
  viewUpdated$ = this.emitUpdate.asObservable();
  // Service message commands
  updateView(item:string){
    this.emitUpdate.next(item);
  }
}
