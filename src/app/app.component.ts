import {Component, OnInit, DoCheck } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './services/services.index';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck   {
  title = 'fronlab';
  identity: any;

  constructor(
    private _userServices : UserService,
    private _router : Router
  ){}
  ngOnInit() {
    this.identity = this._userServices.getIdentity();
  }
  ngDoCheck(){
    let URLactual = window.location.href;
    if(URLactual == 'http://localhost:4200/#/login' && this.identity != null){
      localStorage.clear();//limpiamos el localStorage para que se cierre la sesion
      this.identity = null;
    }else{
      this.identity = this._userServices.getIdentity();  
    }
  }
}
