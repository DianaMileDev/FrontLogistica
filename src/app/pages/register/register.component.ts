import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-register',
  standalone:true,
  imports:[ IonicModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

frmRegister: FormGroup;

  constructor() {
    this.frmRegister=new FormGroup({
      name:new FormControl('', Validators.required), 
      email:new FormControl('', Validators.required), 
      pass:new FormControl('', Validators.required), 
      confirm:new FormControl('', Validators.required) 
    })    
   }

  registrar(){
    console.log(this.frmRegister.value);
  }

  ngOnInit() {}

}
