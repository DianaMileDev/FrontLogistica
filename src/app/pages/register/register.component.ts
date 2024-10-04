import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../service/api.service';
import { IReqRegistro } from '../../models/IReqRegistro.interface';

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[ IonicModule, ReactiveFormsModule, HttpClientModule ],
  templateUrl: './register.component.html',
  providers: [ApiService],
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

frmRegister: FormGroup;

  constructor(private api:ApiService) {
    this.frmRegister=new FormGroup({
      name:new FormControl('', Validators.required), 
      email:new FormControl('', Validators.required), 
      pass:new FormControl('', Validators.required), 
      confirm:new FormControl('', Validators.required) 
    })    
   }

  registrar(form:IReqRegistro){
    console.log(form)
    this.api.registrar(form).subscribe(datosRetorno=>{
      console.log(datosRetorno)
    })
  }

  ngOnInit() {}

}
