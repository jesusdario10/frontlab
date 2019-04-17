import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, UserService } from './services.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  providers:[
    SidebarService,
    UserService
  ]
})
export class ServicesModule { }
