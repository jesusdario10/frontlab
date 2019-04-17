import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }
  logout(){
    //borra todo lo que hay en el localStorage
    localStorage.clear();
    this._router.navigate(['/login']);
    
  }

}
