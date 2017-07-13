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
    {value: 'Evplan'}
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

  location: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  opened: boolean = true;
  constructor() { }

  ngOnInit() {}

  ngOnChanges(){}

  updateConfigLoc(location: string){
    this.location = location;
  }

}
