import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontstructureModule } from '../frontstructure/frontstructure.module';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import {  } from "../frontstructure/frontstructure.module";


@NgModule({
    declarations:[
        DashboardComponent,
        PagesComponent,
        
    ],
    exports:[
        DashboardComponent
    ],
    imports:[
        PAGES_ROUTES,
        FrontstructureModule,
    ]
})
export class PageModule{}