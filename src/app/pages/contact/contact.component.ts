import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports:[ IonicModule, ReactiveFormsModule ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent  implements OnInit {

  frmContact:FormGroup;

  constructor() {
    this.frmContact=new FormGroup({
      nameCont: new FormControl('', Validators.required),
      mail: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    })
   }

  contactar(){
    console.log(this.frmContact.value);
  }
  
  ngOnInit() {}

}
