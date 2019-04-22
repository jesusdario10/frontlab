import { Injectable } from '@angular/core';
import { GLOBAL } from "../global";
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, Subject, pipe } from 'rxjs';
import { map, catchError } from "rxjs/operators"; 
import { throwError } from "rxjs/internal/observable/throwError"; 
import swal from 'sweetalert';
import { UserService } from '../user/user.service';
import { EquipoModel } from '../../models/equipoModel';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  url: string;
  token: any;

  constructor(
    private _http:HttpClient,
    private _userService : UserService
  ){
    this.url = GLOBAL.url;
    this.token = this._userService.getToken();
  }

  //Crear Equipos
  createMachine(equipo:EquipoModel){
    let params = JSON.stringify(equipo);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                   .set('Authorization', this.token);

    return this._http.post(this.url+'equipo/save', params, {headers:headers}).pipe(
      map((resp:any)=>{
        return resp;
      }),
      catchError(err=>{
        swal('Error', err.error.message, 'error');
        return throwError(err) //nos retornra u observable
      })
    )
  }
}
