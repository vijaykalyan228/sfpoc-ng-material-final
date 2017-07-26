import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { CtlEthernetSharedService } from "./ctl-ethernet.shared-service";

@Injectable()
export class CeServiceResolver implements Resolve<any>{

  constructor(private http: Http){ }

  resolve(): Observable<any> {
    return this.http.get("https://sfdccpq.herokuapp.com/CeServlet")
      .map(res => res.json())
      .catch( (err) => Observable.throw(err.json().error) );
  }
}
