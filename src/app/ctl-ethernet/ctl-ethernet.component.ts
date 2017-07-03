import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared-service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ctl-ethernet',
  templateUrl: './ctl-ethernet.component.html',
  styleUrls: ['./ctl-ethernet.component.css']
})
export class CtlEthernetComponent implements OnInit {

  constructor(private router: Router, private _sharedService: SharedService) { }

  ngOnInit() {
  }

  removeItem(){
    this._sharedService.removeItem("CenturyLink Ethernet");
    this.router.navigate(['/']);
  }

}
