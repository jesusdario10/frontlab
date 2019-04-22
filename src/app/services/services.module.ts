import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, UserService, UserGuard, ReceptionService } from './services.index';
import { MachineService } from './machine/machine.service';
import { LocationService } from './location/location.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  providers:[
    SidebarService,
    UserService,
    UserGuard,
    ReceptionService,
    MachineService,
    LocationService
  ]
})
export class ServicesModule { }
