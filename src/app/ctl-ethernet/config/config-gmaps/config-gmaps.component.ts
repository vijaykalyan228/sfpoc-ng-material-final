import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'config-gmaps',
  templateUrl: './config-gmaps.component.html',
  styleUrls: ['./config-gmaps.component.css']
})
export class ConfigGmapsComponent implements OnInit {

  lat: number = 9.9789914;
  lng: number = 76.317617;

  constructor() { }

  ngOnInit() {
  }

}
