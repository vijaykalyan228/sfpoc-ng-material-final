import { Component } from '@angular/core';
import { SharedService } from "./shared-service";

@Component({
  selector: 'app-root',
  providers: [SharedService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
