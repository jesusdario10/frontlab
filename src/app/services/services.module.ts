import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, UserService, UserGuard } from './services.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  providers:[
    SidebarService,
    UserService,
    UserGuard
  ]
})
export class ServicesModule { }
