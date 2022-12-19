export enum ProjectStatus {
  ARCHIVED = 'Archived',
  ACTIVE = 'Active'
}

export class KnittingProject {
  id: number;
  name: string = '';
  status: ProjectStatus = ProjectStatus.ACTIVE;
  needleSize: number = 0;
  yarnDetails: string = '';
  hasMoreColors: boolean = false;
  colors: string[] = Array(1);
  parts: Part[] = [];
  counter: number = 0;
  lastModification: Date = new Date();

  constructor(id?: number) {
    this.id = id == null ? 0 : id;
  }
}

export class Part {
  id: number = NaN;
  name: string = '';
  rows: number = 0;
  stitches: number = 0;
  counter: number = 0;
  lastModification: Date = new Date();
}
