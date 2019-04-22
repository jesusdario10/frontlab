import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { LocationService } from 'src/app/services/services.index';
import { UbicacionModel } from 'src/app/models/ubicacionModel';
import swal from 'sweetalert'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  locations : UbicacionModel[]=[];

  //Formulario
  form : FormGroup;
  formSubmit: boolean;
  

  constructor(
    private fb: FormBuilder,
    private _locationService : LocationService,
  ) { }

  ngOnInit() {
    this.listLocations();
        //Inicializar form
        this.form = this.fb.group({
          codigo : ["", Validators.required],
          nombre : ["", Validators.required],
        })
  }
  //Create Locations
  createLocation(form, formLocation){
    const formModel = this.form.value;
    let saveLocation : UbicacionModel = {
      codigo : formModel.codigo as string,
      nombre : formModel.nombre as string,
    }
    this._locationService.createLocationService(saveLocation)
        .subscribe((data:any)=>{  
          swal('Success', 'Location Created', 'success');
          form.reset();
        })
  }
  //List Locations
  listLocations(){
    this._locationService.listLocations()
        .subscribe((data:any)=>{
          this.locations = data.ubicaciones;
          console.log(this.locations);
        })
  }

}
