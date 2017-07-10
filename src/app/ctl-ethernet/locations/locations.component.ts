import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {MdTabsModule} from '@angular/material';
import { CtlEthernetSharedService } from "../ctl-ethernet.shared-service";

@Component({
  selector: 'ce-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor(private ceService: CtlEthernetSharedService) {
  }

  ngOnInit() { }

  addLocations(){
      console.log("Locations added to Quote.");
      this.ceService.updateView("locationsFlag");
  }
}
