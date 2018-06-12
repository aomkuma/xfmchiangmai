import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar';
@NgModule({
	declarations: [MenuSidebarComponent],
	imports: [IonicModule],
	exports: [MenuSidebarComponent],
	entryComponents: [
    MenuSidebarComponent
  ]
})
export class ComponentsModule {}
