import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CtlEthernet } from "../ctl-ethernet.interface";
import { type, bandwidth, geography, term } from "../../interfaces/ctl-ethernet.enums"

@Component({
  selector: 'ce-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit, OnChanges  {

  @Input() ctlEthernet: CtlEthernet;

  types = [
    {value: 'Evlan'},
    {value: 'Evpline'}
  ];

  bandwidth = [
    {value: "50 Mbps"},
    {value: "100 Mbps"},
    {value: "150 Mbps"},
    {value: "500 Mbps"},
    {value: "1 Gbps"}
  ];

  geography = [
    {value: 'National'},
    {value: 'State'},
    {value: 'Metro'}
  ];

  term = [
    {value: '1 year'},
    {value: '2 years'},
    {value: '3 years'},
    {value: '2 years'}
  ];

  location: string = "Location 1";
  opened: boolean = true;
  device: boolean = true;
  reuseFlag: boolean = false;
  constructor() { }

  ngOnInit() {}

  ngOnChanges(){}

  updateConfigLoc(location: string){
    this.location = location;
  }

  doBulkAction(action: string){
    console.log(action);
    this.reuseFlag = !this.reuseFlag;
  }

}
