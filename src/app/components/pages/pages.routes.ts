import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipoComponent } from './equipo/equipo.component';
import { PatronComponent } from './patron/patron.component';
import { LeyendOperationComponent } from './leyend-operation/leyend-operation.component';
import { ReceptionComponent } from './reception/reception.component';
import { OrderComponent } from './order/order.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CertificateComponent } from './certificate/certificate.component';

const pagesRoutes : Routes = [
    {
        path: '',
        component : PagesComponent,
        children:[
            {path:'dashboard', component:DashboardComponent},
            {path:'equipos', component:EquipoComponent},
            {path:'patrones', component:PatronComponent},
            {path:'leyendOperation', component:LeyendOperationComponent},
            {path:'reception', component:ReceptionComponent},
            {path:'order', component:OrderComponent},
            {path:'delivery', component:DeliveryComponent},
            {path:'certificate', component:CertificateComponent},
        ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)