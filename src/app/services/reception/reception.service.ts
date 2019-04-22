import { Injectable } from '@angular/core';
import { GLOBAL } from "../global";
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable, Subject, pipe } from 'rxjs';
import { map, catchError } from "rxjs/operators"; 
import { throwError } from "rxjs/internal/observable/throwError"; 
import swal from 'sweetalert';
import { RecepcionModel } from 'src/app/models/recepcionModel';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {
  url:any;
  token:any;

  constructor(
    private _http:HttpClient,
    private _userService : UserService
  ){
    this.url = GLOBAL.url;
    this.token = this._userService.getToken();
  }

  //Create Reception
  createReceptionService(reception: RecepcionModel){
    let params = JSON.stringify(reception);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                   .set('Authorization', this.token);

    return this._http.post(this.url+'reception/save', params, {headers:headers}).pipe(
      map((resp:any)=>{
        return resp;
      })
    )
  }

}
