import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PagenofoundComponent } from './components/pagenofound/pagenofound.component';


const appRoutes : Routes = [
    {path:'dashboard', component: DashboardComponent},
    {path:'login', component: LoginComponent},
    {path:'**', component: PagenofoundComponent},
    
];
export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true});