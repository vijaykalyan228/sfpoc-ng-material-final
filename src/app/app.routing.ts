import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {ProductCardsComponent} from "./product-cards/product-cards.component";
import {CtlEthernetComponent} from './ctl-ethernet/ctl-ethernet.component';
import {QuotePricingComponent } from "./quote-pricing/quote-pricing.component";

const APP_ROUTES:Routes = [
    { path:'',component: ProductCardsComponent},
    { path:'ctlethernet',component: CtlEthernetComponent},
    { path:'pricing',component: QuotePricingComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

export const appRoutingProviders: any[] = [];
