import { Component, OnInit, DoCheck  } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  public title:string;

  constructor( private _router:Router,
               private _title: Title) {
    this.getDataRoute()
    .subscribe(event=>{
      //console.log(event);
      this.title=event.title;
      this._title.setTitle(this.title);
    });
   }

  ngOnInit() {
  }
  getDataRoute(){
    return this._router.events.pipe(
      filter(evento=> evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    )
  }


}
