import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';
import swal from 'sweetalert';

@Injectable()
export class UserGuard implements CanActivate{

    constructor(
        private _router: Router,
        private _userServices : UserService
    ){}

    canActivate(){
        let identity = this._userServices.getIdentity();

        if(identity && (identity.role == "CLIENTE" || identity.role == "PROVEEEDOR" || identity.role == "ADMIN" )){
            return true;
        }else{
            this._router.navigate(['/login']);
            return false;
        }    
    }
}