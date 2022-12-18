import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {MenuComponent} from "./menu/menu.component";
import {MenuHeaderComponent} from "./menu-header/menu-header.component";
import {CreatePartModalComponent} from "./create-part-modal/create-part-modal.component";
import {CounterComponent} from "./counter/counter.component";

@NgModule({
  imports: [IonicModule, RouterLink, NgForOf, FormsModule],
  declarations: [MenuComponent, MenuHeaderComponent, CreatePartModalComponent, CounterComponent],
  exports: [MenuComponent, MenuHeaderComponent, CounterComponent],
})
export class ComponentsModule {}
