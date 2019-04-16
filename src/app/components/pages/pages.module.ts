import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Frontstructure } from '../frontstructure/frontstructure.module';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations:[
        DashboardComponent,
        PagesComponent
    ],
    exports:[
        DashboardComponent
    ],
    imports:[
        Frontstructure,
        PAGES_ROUTES
    ]
})
export class PageModule{}