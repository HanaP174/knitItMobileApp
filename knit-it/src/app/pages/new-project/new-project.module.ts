import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewProjectPageRoutingModule } from './new-project-routing.module';

import { NewProjectPage } from './new-project.page';
import {ComponentsModule} from "../../components/components.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewProjectPageRoutingModule,
        ComponentsModule
    ],
  declarations: [NewProjectPage]
})
export class NewProjectPageModule {}
