import {Component} from '@angular/core';
import {AlertController, ModalController, ViewDidLeave} from "@ionic/angular";
import {KnittingProjectService} from "../../service/knitting-project.service";
import {Router} from "@angular/router";
import {KnittingProject, Part} from "../../models/knitting-project.model";

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.page.html',
  styleUrls: ['./project-view.page.scss'],
})
export class ProjectViewPage implements ViewDidLeave {

  project: KnittingProject;

  constructor(private modalCtrl: ModalController,
              private knittingProjectService: KnittingProjectService,
              private alertController: AlertController,
              private router: Router) {
    this.project = history.state.project;
  }

  ionViewDidLeave() {
    this.knittingProjectService.saveProject(this.project);
  }

  // async onAddPartClick() {
  //   // const modal = await this.modalCtrl.create({
  //   //   component: this.CreatePartModalComponent,
  //   // });
  //   modal.present();
  //
  //   const { data, role } = await modal.onWillDismiss();
  //
  //   if (role === 'confirm') {
  //     data.id = this.project.id + this.project.parts.length + 1;
  //     this.project.parts.push(data);
  //     this.knittingProjectService.saveProject(this.project);
  //   }
  // }

  onDeleteProjectClick() {
    this.presentAlertToDeleteProject();
  }

  onDeletePartClick(part: Part) {
    this.presentAlertToDeletePart(part);
  }

  deletePart(part: Part) {
    const indexToDelete = this.project.parts.indexOf(part);
    if (indexToDelete != -1) {
      this.project.parts.splice(indexToDelete, 1);
      this.knittingProjectService.saveProject(this.project);
    }
  }

  private deleteProject() {
    this.knittingProjectService.deleteProject(this.project);
    this.router.navigateByUrl('home');
  }

  async presentAlertToDeleteProject() {
    const alert = await this.alertController.create({
      header: 'Do you want to delete project?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.deleteProject();
          },
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }

  async presentAlertToDeletePart(part: Part) {
    const alert = await this.alertController.create({
      header: 'Do you want to delete project part?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.deletePart(part);
          },
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }
}
