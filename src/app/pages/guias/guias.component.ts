import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-guias',
  standalone:true,
  imports:[ IonicModule],
  templateUrl: './guias.component.html',
  styleUrls: ['./guias.component.scss'],
})
export class GuiasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
