import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontstructureModule } from '../frontstructure/frontstructure.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { EquipoComponent } from './equipo/equipo.component';
import { PatronComponent } from './patron/patron.component';
import { LeyendOperationComponent } from './leyend-operation/leyend-operation.component';
import { ReceptionComponent } from './reception/reception.component';
import { OrderComponent } from './order/order.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CertificateComponent } from './certificate/certificate.component';
import { ReceptionListComponent } from './reception-list/reception-list.component';
import { LocationComponent } from './location/location.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';



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
        ReceptionListComponent,
        LocationComponent,
        
    ],
    exports:[
        DashboardComponent
    ],
    imports:[
        PAGES_ROUTES,
        FrontstructureModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
        CommonModule,
        NgSelectModule
    ]
})
export class PageModule{}