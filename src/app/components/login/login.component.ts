import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/services.index';
import { UserModel } from 'src/app/models/userModel';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user : UserModel;
  public status :string;
  public identity :any;
  public token:string;

  constructor(
    public _router : Router,
    public _userServices :UserService
    
    ) { 
      this.user = new UserModel("", "", "", "", "", "", "", "", "", "", "");
    }

  ngOnInit() {
    init_plugins();
    
  }
  //login del usuario
  login(loginForm){
    this._userServices.login(this.user).subscribe(
      response=>{
        this.identity = response.user;
        this.status = "success";
        //persistir datos del usuario
          localStorage.setItem('identity', JSON.stringify(this.identity));
        //conseguir el token
        this.getToken();
        this._router.navigate(['/dashboard']);
      },
      error=>{
        this.status = "error"
      }
    )
  }
  //obtener token del backend
  getToken(){
    this._userServices.login(this.user, 'true' ).subscribe(
      response=>{
        this.token = response.token;
        if(this.token.length<=0){
          this.status ='error'
        }else{
          this.status = "success";
          localStorage.setItem('token', JSON.stringify(this.token));
          
        }
        //persistir el token del usuario
        //conseguir los contadores del usuario es decir seguidos y me siguen
      },
      error=>{
        this.status = "error"
      }
    )
  }
}
