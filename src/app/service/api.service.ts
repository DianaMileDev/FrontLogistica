import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IReqLogin } from '../models/IReqLogin.interface';
import { IResLogin } from '../models/IResLogin.interface';
import { Observable } from 'rxjs';
import { IReqRegistro } from '../models/IReqRegistro.interface';
import { IResRegistro } from '../models/IResRegistro.interface';
import { IReqContacto } from '../models/IReqContacto.interface';
import { IResContacto } from '../models/IResContacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlEndpoint: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  login(datos:IReqLogin):Observable<IResLogin>{
    let url = `${this.urlEndpoint}/user/login`
    return this.http.post<IResLogin>(url,datos)
  }

  registrar(datos:IReqRegistro):Observable<IResRegistro>{
    let url = `${this.urlEndpoint}/user/crear`
    return this.http.post<IResRegistro>(url,datos)
  }

  contactarse(datos:IReqContacto):Observable<IResContacto>{
    let url = `${this.urlEndpoint}/contacto`
    return this.http.post<IResContacto>(url,datos)
  }
}

