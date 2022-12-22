import {Component, OnInit} from '@angular/core';
import {AlertController, InfiniteScrollCustomEvent, NavController} from "@ionic/angular";
import {KnittingProjectService} from "../../service/knitting-project.service";
import {Router} from "@angular/router";
import {KnittingProject, ProjectStatus} from "../../models/knitting-project.model";

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.page.html',
  styleUrls: ['./new-project.page.scss'],
})
export class NewProjectPage implements OnInit {

  selectStatusOptions: ProjectStatus[] = [];
  project: KnittingProject = new KnittingProject();

  constructor(private knittingProjectService: KnittingProjectService,
              private navController: NavController,
              private alertController: AlertController,
              private router: Router) { }

  ngOnInit() {
    this.init()
  }

  onIonInfinite(event: Event) {
    this.initSelectStatusOptions();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  onSaveClick() {
    this.knittingProjectService.saveProject(this.project);
    this.router.navigateByUrl('home');
  }

  onBackClick() {
    if (this.knittingProjectService.isProjectSaved(this.project)) {
      this.navController.back();
    } else {
      this.presentAlert();
    }
  }

  private init() {
    this.createNewProject();
    this.initSelectStatusOptions();
  }

  private createNewProject() {
    let id;
    if (this.knittingProjectService.projectsIdsSetSize === 0) {
      id = 0;
    } else {
      const lastElmIndex = this.knittingProjectService.projectsIdsSetSize - 1;
      id = Array.from(this.knittingProjectService.projectsIds)[lastElmIndex] + 1;
    }
    this.project = new KnittingProject(id);
  }

  private initSelectStatusOptions() {
    this.selectStatusOptions = [ProjectStatus.ARCHIVED, ProjectStatus.ACTIVE];
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Do you want to save project?',
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'No',
          handler: () => {
            this.navController.back();
          },
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          handler: () => {
            this.onSaveClick();
          },
          cssClass: 'alert-button-confirm',
        },
      ],
    });

    await alert.present();
  }
}
