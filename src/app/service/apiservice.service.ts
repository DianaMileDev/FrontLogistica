import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IReqLogin } from '../models/reqILogin.interface';
import { Observable } from 'rxjs';
import { IResLogin } from '../models/resILogin.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  urlApi: string = 'http://localhost:3000'//Endpoint - App

  constructor(private http:HttpClient) { }//Constructor de dependencias

  login(datos: IReqLogin):Observable<IResLogin>{
    let url = `${this.urlApi}/user/login`;//concateno Endpoint + metodo (index metodos y rutas)
    //console.log('prueba')
    console.log('datos para enviar', datos)
    return this.http.post<IResLogin>(url, datos)
  }
}
