import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

 //  	rootPage:any = 'AboutPage';
	date: any;
	daysInThisMonth: any;
	daysInLastMonth: any;
	daysInNextMonth: any;
	monthNames: string[];
	currentMonth: any;
	currentYear: any;
	currentDate: any;
	constructor(public navCtrl: NavController) {

	}

	ionViewWillEnter() {
		console.log('view event');
	    this.date = new Date();
	    this.monthNames = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
	    this.getDaysOfMonth();
	}

	getDaysOfMonth() {
	  this.daysInThisMonth = new Array();
	  this.daysInLastMonth = new Array();
	  this.daysInNextMonth = new Array();
	  this.currentMonth = this.monthNames[this.date.getMonth()];
	  this.currentYear = this.date.getFullYear();
	  if(this.date.getMonth() === new Date().getMonth()) {
	    this.currentDate = new Date().getDate();
	  } else {
	    this.currentDate = 999;
	  }

	  var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
	  var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
	  for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
	    this.daysInLastMonth.push(i);
	  }

	  var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
	  for (var i = 0; i < thisNumOfDays; i++) {
	    this.daysInThisMonth.push(i+1);
	  }

	  var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
	  var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
	  for (var i = 0; i < (6-lastDayThisMonth); i++) {
	    this.daysInNextMonth.push(i+1);
	  }
	  var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
	  if(totalDays<36) {
	    for(var i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
	      this.daysInNextMonth.push(i);
	    }
	  }
	}

	goToLastMonth() {
	  this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
	  this.getDaysOfMonth();
	}

	goToNextMonth() {
	  this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
	  this.getDaysOfMonth();
	}


}
