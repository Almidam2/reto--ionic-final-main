import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-formulario-modal',
  templateUrl: './formulario-modal.component.html',
  styleUrls: ['./formulario-modal.component.scss'],
})
export class FormularioModalComponent {

  constructor(private modalController: ModalController) {}


  dismiss() {
    this.modalController.dismiss();
  }
}
