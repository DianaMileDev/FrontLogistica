import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiserviceService } from '../../service/apiservice.service';
import { IReqLogin } from '../../../models/reqILogin.interface';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[ IonicModule, ReactiveFormsModule],
  providers: [ApiserviceService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  frmLogin:FormGroup;

  constructor(private apiService: ApiserviceService) {
    this.frmLogin=new FormGroup({
      usu:new FormControl('', Validators.required),
      pass:new FormControl('',Validators.required)
    })
   }

  login(){
    //console.log(this.frmLogin.value)
    //IRegLogin.user = this.frmLogin.user.value;
    this.apiService.login();// Invoco metodo del apiservice
  }

  ngOnInit() {}

}
