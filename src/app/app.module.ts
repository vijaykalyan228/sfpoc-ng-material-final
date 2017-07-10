import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import {routing, appRoutingProviders } from './app.routing';

import { MdToolbarModule, MdToolbarRow, MdMenuModule, MdButtonModule,
   MdIconModule, MdCardModule, MdTabsModule, MdSelectModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LocationsComponent } from './ctl-ethernet/locations/locations.component';
import { CtlEthernetComponent } from './ctl-ethernet/ctl-ethernet.component';
import { ConfigComponent } from './ctl-ethernet/config/config.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardsComponent,
    NavbarComponent,
    LocationsComponent,
    CtlEthernetComponent,
    ConfigComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    MdToolbarModule, MdMenuModule, MdButtonModule,
     MdIconModule, MdCardModule, MdTabsModule, MdSelectModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
