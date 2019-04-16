import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

 
  menu : any = [
    {
      titulo: "Equipos",
      icono: "mdi mdi-gauge",
      submenu:[
        { titulo:"Dasboard", url:"/dashboard" },
        { titulo:"Equipos", url:"/reception" },
        { titulo:"Grafica1", url:"/graficas1" },
        { titulo:"Grafica2", url:"/graficas2" }
      ]
    }
  ];

  constructor() { }
}
