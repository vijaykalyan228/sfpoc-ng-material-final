import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import {routing, appRoutingProviders } from './app.routing';

import { MdToolbarModule, MdToolbarRow, MdMenuModule, MdButtonModule, MdSlideToggleModule,
   MdIconModule, MdCardModule, MdTabsModule, MdSelectModule, MdSidenavModule } from '@angular/material';
import "hammerjs";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LocationsComponent } from './ctl-ethernet/locations/locations.component';
import { CtlEthernetComponent } from './ctl-ethernet/ctl-ethernet.component';
import { ConfigComponent } from './ctl-ethernet/config/config.component';
import { QuotePricingComponent } from './quote-pricing/quote-pricing.component';
import { ConfigGmapsComponent } from './ctl-ethernet/config/config-gmaps/config-gmaps.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardsComponent,
    NavbarComponent,
    LocationsComponent,
    CtlEthernetComponent,
    ConfigComponent,
    QuotePricingComponent,
    ConfigGmapsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    MdToolbarModule, MdMenuModule, MdButtonModule, MdSidenavModule,
     MdIconModule, MdCardModule, MdTabsModule, MdSelectModule, MdSlideToggleModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
