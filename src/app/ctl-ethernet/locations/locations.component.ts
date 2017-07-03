import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {MdTabsModule} from '@angular/material';

@Component({
  selector: 'ce-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() { }

  addLocations(){
      console.log("Locations added to Quote.");
  }
}
