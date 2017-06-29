import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {ProductCardsComponent} from "./product-cards/product-cards.component";
import {CtlEthernetComponent} from './ctl-ethernet/ctl-ethernet.component';

const APP_ROUTES:Routes = [
    { path:'',component: ProductCardsComponent},
    { path:'ctlethernet',component: CtlEthernetComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

export const appRoutingProviders: any[] = [];
