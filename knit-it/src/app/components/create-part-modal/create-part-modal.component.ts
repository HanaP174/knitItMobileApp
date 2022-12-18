import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {Part} from "../../models/knitting-project.model";

@Component({
  selector: 'app-create-part-modal',
  templateUrl: './create-part-modal.component.html',
  styleUrls: ['./create-part-modal.component.scss'],
})
export class CreatePartModalComponent {

  projectPart: Part = new Part();

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.projectPart.lastModification = new Date(Date.now());
    return this.modalCtrl.dismiss(this.projectPart, 'confirm');
  }
}
