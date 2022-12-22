import {Component, EventEmitter, Input, Output} from '@angular/core';
import {KnittingProject, ProjectStatus} from "../../models/knitting-project.model";
import {GenerateColorsService} from "../../service/generate-colors.service";

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss'],
})
export class ProjectInfoComponent {

  @Input() get project(): KnittingProject {
    return this.innerProject;
  }
  @Output() projectChange = new EventEmitter();
  set project(value: KnittingProject) {
    this.innerProject = value;
    this.projectChange.emit(this.innerProject);
  }

  numberOfUsedColors: number = 1;

  readonly statusKeys = Object.values(ProjectStatus);

  private innerProject: KnittingProject = new KnittingProject();

  constructor(private generateColorsService: GenerateColorsService) { }

  createArray() {
    this.project.colors = Array(this.numberOfUsedColors);
  }

  onGenerateColorsClick() {
    this.generateColorsService.generateColors((palette: number[][]) => {
      this.project.colors = this.getPalette(palette);
    });
  }

  private getPalette(palette: number[][]) {
    console.log(palette);
    const colors = [];
    for (const color of palette) {
      colors.push(color.toString())
    }
    return colors;
  }
}
