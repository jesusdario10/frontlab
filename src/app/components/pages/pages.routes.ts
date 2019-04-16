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
            {path:'dashboard', component:DashboardComponent, data :{title:'Dashboard'}},
            {path:'equipos', component:EquipoComponent, data :{title:'Machine'}},
            {path:'patrones', component:PatronComponent, data :{title:'Patter'}},
            {path:'leyendOperation', component:LeyendOperationComponent, data :{title:'Leyend'}},
            {path:'reception', component:ReceptionComponent, data :{title:'Reception'}},
            {path:'order', component:OrderComponent, data :{title:'Order'}},
            {path:'delivery', component:DeliveryComponent, data :{title:'Delivery'}},
            {path:'certificate', component:CertificateComponent, data :{title:'Certificate'}},
            {path:'', redirectTo:'/dashboard', pathMatch:'full'}
        ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)