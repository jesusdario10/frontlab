import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTES } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { PageModule } from './components/pages/pages.module';
import { ServicesModule } from './services/services.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PagenofoundComponent } from './components/pagenofound/pagenofound.component';
import { UserGuard, UserService } from './services/services.index';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenofoundComponent,  
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule

  ],
  providers: [
    UserService,
    UserGuard

            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
