import { Component } from '@angular/core';
import {MenuController} from 'ionic-angular';
/**
 * Generated class for the MenuSidebarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu-sidebar',
  templateUrl: 'menu-sidebar.html'
})
export class MenuSidebarComponent {

  text: string;

  constructor(public menuCtrl: MenuController) {
    console.log('Hello MenuSidebarComponent Component');
    this.text = 'Hello World';
  }

    openMenu() {
     this.menuCtrl.open();
   }

   closeMenu() {
     this.menuCtrl.close();
   }

   toggleMenu() {
     this.menuCtrl.toggle();
   }
}
