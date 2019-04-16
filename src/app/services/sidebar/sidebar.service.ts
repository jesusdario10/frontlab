import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

 
  menu : any = [
    {
      titulo: "Device",
      icono: "mdi mdi-calculator",
      submenu:[
        { titulo:"Dasboard", url:"/dashboard" },
        { titulo:"Equipos", url:"/equipos" },
        { titulo:"Patrones", url:"/patrones" }
      ]
    },
    {
      titulo: "Operation",
      icono: "mdi mdi-owl",
      submenu:[
        { titulo:"Leyend", url:"/leyendOperation" },
        { titulo:"Reception", url:"/reception" },
        { titulo:"Order", url:"/order" },
        { titulo:"Delivery", url:"/delivery" },
        { titulo:"Certificate", url:"/certificate" },
      ]
    },

  ];

  constructor() { }
}
