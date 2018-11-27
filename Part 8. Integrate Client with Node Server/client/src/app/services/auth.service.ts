import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AppHttpService } from './app-http.service';
import { RegisterModel } from '../models/register.model';
import { LoginModel } from '../models/login.model';



@Injectable()
export class AuthService {

  constructor(private appHttp: AppHttpService) { }

  registerUser(user: RegisterModel) {
    return this.appHttp.post('users/register', user)
    .map(res => res.json());
  }

  authenticateUser(user: LoginModel) {
    return this.appHttp.post('users/login', user)
    .map(res => res.json());
  }

}
