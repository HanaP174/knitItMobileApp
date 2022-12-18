import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent {
  navigators: any;

  constructor() {
    this.initNavigators();
  }

  private initNavigators() {
    this.navigators = [
      {
        url: '/new-project',
        text: 'Create new project'
      },
      {
        url: '/home',
        text: 'Your projects'
      }
    ];
  }
}
