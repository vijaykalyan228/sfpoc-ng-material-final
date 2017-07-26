import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CtlEthernet } from "../ctl-ethernet.interface";
import { type, bandwidth, geography, term } from "../../interfaces/ctl-ethernet.enums"
import { CtlEthernetSharedService } from "../ctl-ethernet.shared-service";

@Component({
  selector: 'ce-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit, OnChanges  {

  @Input() ctlEthernet: CtlEthernet;

  types: any[];
  bandwidth: any[];
  geography: any[];
  term: any[];
  locations: any[];

  location: string = "";
  opened: boolean = true;
  device: boolean = true;
  reuseFlag: boolean = false;

  constructor(private ceService: CtlEthernetSharedService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let specs = this.route.snapshot.data['ceSpecs'];
    this.types = specs['EVC'][0]['type'];
    this.bandwidth = specs["EVC"][1]["tbandwidth"];
    this.geography = specs["EVC"][2]["geography"];
    this.term = specs["term"];
    this.locations = specs["locations"];
    this.location = this.locations[0].address;
    this.ceService.updateMap(this.locations[0].latitude, this.locations[0].longitude);
  }

  ngOnChanges(){}

  updateConfigLoc(location: string){
    this.location = location;
    let temp = this.locations.find(loc => loc.address==location);
    this.ceService.updateMap(temp.latitude, temp.longitude);
  }

  doBulkAction(action: string){
    // console.log(action);
    this.reuseFlag = !this.reuseFlag;
  }

}
