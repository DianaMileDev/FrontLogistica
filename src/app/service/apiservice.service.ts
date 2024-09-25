import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  urlApi: string = 'http://localhost:3000'//Endpoint - App

  constructor(private http:HttpClient) { }//Constructor de dependencias

  login(){
    let url = `${this.urlApi}/user/login`;//concateno Endpoint + metodo (index metodos y rutas)
  }
}
