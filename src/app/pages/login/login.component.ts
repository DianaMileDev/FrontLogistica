import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[ IonicModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  frmLogin:FormGroup;

  constructor() {
    this.frmLogin=new FormGroup({
      usu:new FormControl('', Validators.required),
      pass:new FormControl('',Validators.required)
    })
   }

  login(){
    console.log(this.frmLogin.value)
  }

  ngOnInit() {}

}
