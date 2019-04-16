import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PagenofoundComponent } from './components/pagenofound/pagenofound.component';
import { PagesComponent } from './components/pages/pages.component';


const appRoutes : Routes = [
    {path:'login', component: LoginComponent},
    {path:'**', component: PagenofoundComponent},
    
];
    export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true});