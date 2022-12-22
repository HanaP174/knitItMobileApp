import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {NgForOf, NgStyle} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MenuComponent} from "./menu/menu.component";
import {MenuHeaderComponent} from "./menu-header/menu-header.component";
import {CreatePartModalComponent} from "./create-part-modal/create-part-modal.component";
import {CounterComponent} from "./counter/counter.component";
import {ProjectInfoComponent} from "./project-info/project-info.component";

@NgModule({
  imports: [IonicModule, RouterLink, NgForOf, FormsModule, NgStyle],
  declarations: [MenuComponent, MenuHeaderComponent, CreatePartModalComponent, CounterComponent,ProjectInfoComponent],
  exports: [MenuComponent, MenuHeaderComponent, CounterComponent, ProjectInfoComponent],
})
export class ComponentsModule {}
