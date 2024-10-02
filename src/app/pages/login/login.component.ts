import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiserviceService } from '../../service/apiservice.service';
import { HttpClientModule } from '@angular/common/http';
import { IReqLogin } from '../../models/reqILogin.interface';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[ IonicModule, ReactiveFormsModule, HttpClientModule],
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

  login(form: IReqLogin){
    //console.log('datos de entrada',form);
    this.apiService.login(form).subscribe(retorno => {
      console.log(retorno);
    })
  }

  ngOnInit() {}

}
