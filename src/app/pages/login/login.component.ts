import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../service/api.service';
import { IReqLogin } from '../../models/IReqLogin.interface';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[ IonicModule, ReactiveFormsModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  frmLogin:FormGroup;

  constructor(private apiService: ApiService) {
    this.frmLogin=new FormGroup({
      usu:new FormControl('', Validators.required),
      pass:new FormControl('',Validators.required)
    })
   }

  login(form: IReqLogin){
    console.log(form);
    this.apiService.login(form).subscribe(retorno => {
      console.log(retorno);
    })
  }

  ngOnInit() {}

}
