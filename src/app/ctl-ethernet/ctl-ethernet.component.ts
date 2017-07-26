import { Component, OnInit, Output } from '@angular/core';
import { SharedService } from "../shared-service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
import { CtlEthernetSharedService } from "./ctl-ethernet.shared-service";
import {CtlEthernet } from "./ctl-ethernet.interface";
import { type, bandwidth, geography, term } from '../interfaces/ctl-ethernet.enums';

@Component({
  selector: 'app-ctl-ethernet',
  templateUrl: './ctl-ethernet.component.html',
  providers: [CtlEthernetSharedService],
  styleUrls: ['./ctl-ethernet.component.css']
})

export class CtlEthernetComponent implements OnInit {

  ctlServiceSubscription: Subscription;
  locationsFlag = false;
  terms: any[];
  @Output() ctlEthernet: CtlEthernet;

  constructor(private router: Router, private _sharedService: SharedService,
     private ceService: CtlEthernetSharedService, private route: ActivatedRoute) {
       this.ctlServiceSubscription = this.ceService.viewUpdated$.subscribe(
         item => {
           switch(item){
             case "locationsFlag":{
               this.locationsFlag = !this.locationsFlag;
               break;
             }
           }
       });
     }

  ngOnInit() {
    this.ctlEthernet = {locations:[],type:type.Evlan, bandwidth: bandwidth["100 Mbps"]
    ,geography: geography.National, term: term["2 years"], reuse: false, buildOut: false};

    let specs = this.route.snapshot.data['ceSpecs'];
    this.terms = specs["term"];
  }

  removeItem(){
    this._sharedService.removeItem("CenturyLink Ethernet");
    this.router.navigate(['/']);
  }
}
