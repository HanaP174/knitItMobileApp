import { Component } from '@angular/core';
import {KnittingProject} from "../../models/knitting-project.model";
import {KnittingProjectService} from "../../service/knitting-project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  projects: KnittingProject[] = [];


  constructor(private knittingProjectService: KnittingProjectService,
              private router: Router) {
  }

  ionViewWillEnter(): void {
    this.projects = this.knittingProjectService.projects;
  }

  onCardClick(project: KnittingProject) {
    this.router.navigate(['/project-view'], { state: { project: project } });
  }

}
