import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/frontstructure/sidebar/sidebar.component';
import { HeaderComponent } from './components/frontstructure/header/header.component';
import { BreadcrumbsComponent } from './components/frontstructure/breadcrumbs/breadcrumbs.component';
import { PagenofoundComponent } from './components/pagenofound/pagenofound.component';
import { APP_ROUTES } from './app.routes';
import { PagesComponent } from './components/pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    PagenofoundComponent,
    PagesComponent,
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
