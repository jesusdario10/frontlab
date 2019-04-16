import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTES } from './app.routes';
import { PageModule } from './components/pages/pages.module';
import { ServicesModule } from './services/services.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PagenofoundComponent } from './components/pagenofound/pagenofound.component';



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
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
