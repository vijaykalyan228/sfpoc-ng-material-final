import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { CtlEthernet } from "./ctl-ethernet.interface";
import { Http } from "@angular/http";

@Injectable()
export class CtlEthernetSharedService {

  public ctlEthernet: CtlEthernet;
  // Observable string sources
  private emitUpdate = new Subject<any>();
  private mapUpdate = new Subject<any>();
  // Observable string streams
  viewUpdated$ = this.emitUpdate.asObservable();
  locationUpdated$ = this.mapUpdate.asObservable();
  // Service message commands

  term:string[];
  locations: any[];
  evc:any[];
  cos:string[];
  flag:boolean = true;

  constructor(private http: Http){}

  updateView(item:string){
    this.emitUpdate.next(item);
  }

  updateMap(latitude:any,longitude:any){
    this.mapUpdate.next([latitude,longitude]);
  }

}
