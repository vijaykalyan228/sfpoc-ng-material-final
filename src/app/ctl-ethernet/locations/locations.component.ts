import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MdTabsModule} from '@angular/material';
import { CtlEthernetSharedService } from "../ctl-ethernet.shared-service";

@Component({
  selector: 'ce-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  specs: any[];
  locations: any[];

  constructor(private ceService: CtlEthernetSharedService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.specs = this.route.snapshot.data['ceSpecs'];
    this.locations = this.specs["locations"];
  }

  addLocations(){
      // console.log("Locations added to Quote.");
      this.ceService.updateView("locationsFlag");
  }
}
