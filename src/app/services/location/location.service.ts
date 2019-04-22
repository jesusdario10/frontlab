import { Injectable } from '@angular/core';
import { GLOBAL } from "../global";
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, Subject, pipe } from 'rxjs';
import { map, catchError } from "rxjs/operators"; 
import { throwError } from "rxjs/internal/observable/throwError"; 
import swal from 'sweetalert';
import { UserService } from '../services.index';
import { UbicacionModel } from 'src/app/models/ubicacionModel';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  url:any;
  token:any;
  
  constructor(
    private _http:HttpClient,
    private _userService : UserService
  ) {
    this.url = GLOBAL.url;
    this.token = this._userService.getToken();
  }
  //Create Locations
  createLocationService(reception: UbicacionModel){
    let params = JSON.stringify(reception);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', this.token);
    return this._http.post(this.url+'ubicacion/save', params, {headers:headers}).pipe(
      map((resp:any)=>{
        return resp;
      })
    )
  }

  //Listar Ubicaciones para los clientes( este listado es el que aparece en el autocomplete)
  listLocations():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                   .set('Authorization', this.token);
    return this._http.get(this.url+'ubicacion/listarubicaciones', {headers:headers}).pipe(
      map((resp:any)=>{
        return resp;
      })
    )
  }
}
