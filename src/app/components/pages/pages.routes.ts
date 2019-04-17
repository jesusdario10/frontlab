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
import { UserGuard } from 'src/app/services/services.index';

const pagesRoutes : Routes = [
    {
        path: '',
        component : PagesComponent,
        children:[
            {path:'dashboard', component:DashboardComponent, data :{title:'Dashboard'}, canActivate : [UserGuard]},
            {path:'equipos', component:EquipoComponent, data :{title:'Machine'}, canActivate : [UserGuard]},
            {path:'patrones', component:PatronComponent, data :{title:'Patter'}, canActivate : [UserGuard]},
            {path:'leyendOperation', component:LeyendOperationComponent, data :{title:'Leyend'}, canActivate : [UserGuard]},
            {path:'reception', component:ReceptionComponent, data :{title:'Reception'}, canActivate : [UserGuard]},
            {path:'order', component:OrderComponent, data :{title:'Order'}, canActivate : [UserGuard]},
            {path:'delivery', component:DeliveryComponent, data :{title:'Delivery'}, canActivate : [UserGuard]},
            {path:'certificate', component:CertificateComponent, data :{title:'Certificate'}, canActivate : [UserGuard]},
            {path:'', redirectTo:'/dashboard', pathMatch:'full', canActivate : [UserGuard]}
        ]
    }
]

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)