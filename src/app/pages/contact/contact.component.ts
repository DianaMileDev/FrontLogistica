import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../../service/api.service';
import { IReqContacto } from '../../models/IReqContacto.interface';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports:[ IonicModule, ReactiveFormsModule, HttpClientModule ],
  providers:[ApiService],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent  implements OnInit {

  frmContact:FormGroup;

  constructor(private api:ApiService) {
    this.frmContact=new FormGroup({
      nameCont: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    })
   }

  contactar(form: IReqContacto){
    console.log(form);
    this.api.contactarse(form).subscribe(datosRetorno=>{
      console.log(datosRetorno)
    })
  }  
  ngOnInit() {}
}
