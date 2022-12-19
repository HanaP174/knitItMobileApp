import {Injectable} from "@angular/core";
import {Preferences} from "@capacitor/preferences";
import {KnittingProject} from "../models/knitting-project.model";

@Injectable({
  providedIn: 'root'
})
export class KnittingProjectService {

  private _projects: KnittingProject[] = [];
  private _projectsIds: Set<number> = new Set<number>();

  constructor() {
    this.loadState();
  }

  async saveProject(project: KnittingProject) {
    if (!this._projectsIds.has(project.id)) {
      this._projects.push(project);
      this._projectsIds.add(project.id);
    } else {
      const index = this._projects.indexOf(project);
      this._projects.splice(index, 1);
      this._projects.push(project);
    }
    this.sortIds();
    await Preferences.set({
      key: 'projects',
      value: JSON.stringify(this._projects),
    });
  }

  async deleteProject(project: KnittingProject) {
    const projectToDelete = this._projects.find(p => p.id === project.id);
    if (projectToDelete) {
      const indexToDelete = this._projects.indexOf(projectToDelete);
      if (indexToDelete != -1) {
        this._projects.splice(indexToDelete, 1);
      }
      this._projectsIds.delete(project.id);
      this.sortIds();
      await Preferences.set({
        key: 'projects',
        value: JSON.stringify(this._projects)
      })
    }
  }

  async loadState () {
    const {value} = await Preferences.get({key: 'projects'});
    if (value) {
      this._projects = JSON.parse(value);
      this._projectsIds = new Set<number>(this._projects.map(project => project.id));
    }
  }

  async removeAll() {
    await  Preferences.clear();
  }

  isProjectSaved(project: KnittingProject) {
    return this._projects.includes(project);
  }

  get projects(): KnittingProject[] {
    return this._projects;
  }

  get projectsIds(): Set<number> {
    return this._projectsIds;
  }

  get projectsIdsSetSize(): number {
    return this._projectsIds.size;
  }

  private sortIds() {
    Array.from(this._projectsIds).sort((a, b) => a - b);
  }
}
