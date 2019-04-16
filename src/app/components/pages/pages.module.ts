import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontstructureModule } from '../frontstructure/frontstructure.module';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import {  } from "../frontstructure/frontstructure.module";
import { EquipoComponent } from './equipo/equipo.component';
import { PatronComponent } from './patron/patron.component';
import { LeyendOperationComponent } from './leyend-operation/leyend-operation.component';
import { ReceptionComponent } from './reception/reception.component';
import { OrderComponent } from './order/order.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CertificateComponent } from './certificate/certificate.component';


@NgModule({
    declarations:[
        DashboardComponent,
        PagesComponent,
        EquipoComponent,
        PatronComponent,
        LeyendOperationComponent,
        ReceptionComponent,
        OrderComponent,
        DeliveryComponent,
        CertificateComponent,
        
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