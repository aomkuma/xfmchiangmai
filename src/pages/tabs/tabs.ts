import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = HomePage;
	tab2Root = AboutPage;
	tab3Root = ContactPage;
	public webServerHost : string = 'https://app.xfmnetwork.com/backoffice/';
	ADS_LIST : any;
	ads : any;
	ads_url : any;
	constructor(private http: HTTP, public platform : Platform, private iab: InAppBrowser) {

		this.platform.ready().then(() => { 
			this.loadAds();
			setInterval(() => this.loadAds(), 36000);
		});
	}

	loadAds(){
	    var date = new Date();
	    var month = date.getMonth() + 1;
	    var select_month = month.toString().length == 1?'0' + month : month;
	    var select_date = date.getDate().toString().length == 1?'0' + date.getDate() : date.getDate();
	    var selectedDateText = date.getFullYear() + '-' + select_month + '-'  + select_date;

	    this.http.post( this.webServerHost + '/ads_service.php', {'date':selectedDateText}, {})
	    .then(data => {
	      this.ADS_LIST = JSON.parse(data.data);
	      
	      this.randomAds();
	      setInterval(() => this.randomAds(), 10000);

	      console.log('this.ads.ads_path'  ,this.ads.ads_path);
	      console.log('Load ads in ' + selectedDateText, this.ADS_LIST.length); // data received by server
	      //console.log(data.headers);
	      
	    })
	    .catch(error => {

	      console.log(error.status);
	      console.log(error.error); // error message as string
	      console.log(error.headers);

	    });
  	}

  	randomAds(){
  		let adsLength = this.ADS_LIST.length;
  		let index = Math.floor(Math.random() * adsLength);
  		this.ads = this.ADS_LIST[index].ads_path;
  		this.ads_url =  this.ADS_LIST[index].link_url;
  	}

  	openAds(url)
   	{
   		console.log(url);
   		if(url != null && url != ''){
	     	this.iab.create(url,'_blank',{location:'no'});
	 	}
   }
}
