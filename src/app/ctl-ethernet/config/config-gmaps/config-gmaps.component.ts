import { Component, OnInit } from '@angular/core';
import { CtlEthernetSharedService } from "../../ctl-ethernet.shared-service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'config-gmaps',
  templateUrl: './config-gmaps.component.html',
  styleUrls: ['./config-gmaps.component.css']
})
export class ConfigGmapsComponent implements OnInit {

  lat: any = 9.9789914;
  lng: any = 76.317617;
  subscription: Subscription;

  constructor(private ceService: CtlEthernetSharedService) {
      this.subscription = this.ceService.locationUpdated$.subscribe(
        param => {
          this.lat = +param[0];
          this.lng = +param[1];
      });
  }

  ngOnInit() { }

}
