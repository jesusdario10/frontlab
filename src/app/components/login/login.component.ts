import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _router : Router) { }

  ngOnInit() {
    
  }
  
  login(){
    this._router.navigate(['/dashboard']);
    console.log("wkmasdjnfdskj");
  }

}
