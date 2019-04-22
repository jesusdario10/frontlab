import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import swal from 'sweetalert'
import { UserService, LocationService } from 'src/app/services/services.index';
import { MachineService } from 'src/app/services/machine/machine.service';
import { EquipoModel } from 'src/app/models/equipoModel';
import { UbicacionModel } from 'src/app/models/ubicacionModel';



@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  ubicaciones : UbicacionModel[]=[];   
  selectedUbicacion : any;
  

  tercero : any;
  
  //Formulario
    form : FormGroup;
    formSubmit: boolean;
    user: any;

  constructor(
    private fb: FormBuilder,
    private _userService : UserService,
    private _machineService : MachineService,
    private _locationService : LocationService
  ) { }

  ngOnInit() {
    this.listLocation();
    this.user = this._userService.getIdentity();
    this.form = this.fb.group({
      tag : ["", Validators.required],
      nombre : ["", Validators.required],
      marca : ["", Validators.required],
      modelo : ["", Validators.required],
      serial : ["", Validators.required],
      tipo_equipo : ["", Validators.required],
      fabricante : ["", Validators.required],
      ubicacion : ["", Validators.required],
      dimenciones : ["", Validators.required],
      estado : ["", Validators.required],
      tipo_indicacion : ["", Validators.required],
      intervalo_indicacion : ["", Validators.required],
      resolucion : ["", Validators.required],
      anexos : ["", Validators.required]

    })
  }
  //Create Machine
  createMachine(form, formMachine){
    const formModel = this.form.value;
    let saveMachine : EquipoModel = {
      tag : formModel.tag as string,
      nombre : formModel.nombre as string,
      marca : formModel.marca as string,
      modelo : formModel.modelo as string,
      serial : formModel.serial as string,
      tipo_equipo : formModel.tipo_equipo as string,
      fabricante : formModel.fabricante as string,
      ubicacion : formModel.ubicacion as string,
      dimenciones : formModel.dimenciones as string,
      estado : formModel.estado as string,
      tipo_indicacion : formModel.tipo_indicacion as string,
      intervalo_indicacion : formModel.intervalo_indicacion as string,
      resolucion : formModel.resolucion as string,
      anexos : formModel.anexos as string
  
    }
  
    this._machineService.createMachine(saveMachine)
        .subscribe((data:any)=>{
         console.log(data);
          swal('Success', 'Exito se guardo correctamente', 'success');
          form.reset();
        }) 
  }

  //List Locations
  listLocation(){
    this._locationService.listLocations()
        .subscribe((data:any)=>{
          this.ubicaciones = data.ubicaciones;
        })
  }

}
