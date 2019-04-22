import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';

import { RecepcionModel } from 'src/app/models/recepcionModel';
import { ReceptionService, UserService } from 'src/app/services/services.index';
import swal from 'sweetalert'

@Component({
  selector: 'app-reception',
  templateUrl: './reception.component.html',
  styleUrls: ['./reception.component.css']
})
export class ReceptionComponent implements OnInit {
  
  user : any;

  //Formulario
  form : FormGroup;
  formSubmit: boolean;

  constructor(
    private fb: FormBuilder,
    private _receptionService : ReceptionService,
    private _userService : UserService
  ){ 
    
  }

  ngOnInit() {
    this.user = this._userService.getIdentity();
    //Inicializar form
    this.form = this.fb.group({
      fecha : ["", Validators.required],
      direccion : ["", Validators.required],
      telefono : ["", Validators.required],
      email : ["", Validators.required],
      solicitante : ["", Validators.required],
      tipo_servicio : ["", Validators.required],
      tag : ["", Validators.required],
      serial : ["", Validators.required],
      intervalo_medicion : ["", Validators.required],
      tipo_medicion : ["", Validators.required],
      tipo_indicacion : ["", Validators.required],
      intervalo_calibracion : ["", Validators.required],
      estado_equipo : ["", Validators.required],
      apto : ["", Validators.required],
      observaciones : ["", Validators.required]
    })
    
  }

  createReception(form, formReception){
    const formModel = this.form.value;
    let saveReception : RecepcionModel = {
      fecha : formModel.fecha as string,
      direccion : formModel.direccion as string,
      telefono : formModel.telefono as string,
      email : formModel.email as string,
      solicitante : formModel.solicitante as string,
      tipo_servicio : formModel.tipo_servicio as string,
      tag : formModel.tag as string,
      serial : formModel.serial as string,
      intervalo_medicion : formModel.intervalo_medicion as string,
      tipo_medicion : formModel.tipo_medicion as string,
      tipo_indicacion : formModel.tipo_indicacion as string,
      intervalo_calibracion : formModel.intervalo_calibracion as string,
      estado_equipo : formModel.estado_equipo as string,
      apto : formModel.apto as string,
      observaciones : formModel.observaciones as string,
      tercero : this.user.tercero
    }
    this._receptionService.createReceptionService(saveReception)
        .subscribe((data:any)=>{
          console.log(data);
          swal('Success', 'Recetion Created', 'success');
          form.reset();
        })
  }

}
