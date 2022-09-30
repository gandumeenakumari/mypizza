import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { login } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class loginService {

  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  
  addlogin(addloginRequest:login):Observable<login>
  {
    addloginRequest.loginid='00000000-0000-0000-0000-000000000000';
    return this.http.post<login>(this.baseApiUrl+'/api/login',addloginRequest);
  }
}
