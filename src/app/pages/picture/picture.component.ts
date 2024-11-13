import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from "@capacitor-community/camera-preview";

@Component({
  selector: 'app-picture',
  standalone: true,
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class PictureComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  iniciar: boolean = false;
  listaImagenes: string[] = [];

  iniciarCamara(){
    const cameraPreviewOptions: CameraPreviewOptions = {
      width: 250,
      height: 250,
      x: 100,
      y: 100,
      position: 'rear',
      parent: 'camera-container',
      className: 'camera-preview'
    }

    CameraPreview.start(cameraPreviewOptions).then(() => {
      this.iniciar = true;
    }).catch(error => {
      console.error("Error iniciando la previsualización de la cámara: ", error);
    });
  }

  desactivarCamara(){
    CameraPreview.stop().then(() => {
      this.iniciar = false;
    })
  }

  capturarImagen(){
    const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
      quality: 50
    }

    CameraPreview.capture(cameraPreviewPictureOptions).then((result: any) => {
      const base64 = "data:image/png;base64," + result.value;
      this.listaImagenes.push(base64);
    })
  }
}
