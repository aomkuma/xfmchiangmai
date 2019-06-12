webpackJsonp([0],{

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(http, platform, iab) {
        var _this = this;
        this.http = http;
        this.platform = platform;
        this.iab = iab;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__contact_contact__["a" /* ContactPage */];
        this.webServerHost = 'http://xfmnetwork.com/backoffice/';
        this.platform.ready().then(function () {
            _this.loadAds();
            setInterval(function () { return _this.loadAds(); }, 36000);
        });
    }
    TabsPage.prototype.loadAds = function () {
        var _this = this;
        var date = new Date();
        var month = date.getMonth() + 1;
        var select_month = month.toString().length == 1 ? '0' + month : month;
        var select_date = date.getDate().toString().length == 1 ? '0' + date.getDate() : date.getDate();
        var selectedDateText = date.getFullYear() + '-' + select_month + '-' + select_date;
        this.http.post(this.webServerHost + '/ads_service.php', { 'date': selectedDateText }, {})
            .then(function (data) {
            _this.ADS_LIST = JSON.parse(data.data);
            _this.randomAds();
            setInterval(function () { return _this.randomAds(); }, 10000);
            console.log('this.ads.ads_path', _this.ads.ads_path);
            console.log('Load ads in ' + selectedDateText, _this.ADS_LIST.length); // data received by server
            //console.log(data.headers);
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    };
    TabsPage.prototype.randomAds = function () {
        var adsLength = this.ADS_LIST.length;
        var index = Math.floor(Math.random() * adsLength);
        this.ads = this.ADS_LIST[index].ads_path;
        this.ads_url = this.ADS_LIST[index].link_url;
    };
    TabsPage.prototype.openAds = function (url) {
        console.log(url);
        if (url != null && url != '') {
            this.iab.create(url, '_blank', { location: 'no' });
        }
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Lenovo\source\repos\xfmchiangmai\src\pages\tabs\tabs.html"*/'<ion-footer align-title="center" class="bar-assertive text-center" style="height: 80px;margin-bottom: 5px;background-color:#000000;">\n\n	<ion-row (tap)="openAds(ads_url)" style="background-color:#000000;">\n\n			<div class = "col col-offset-25 text-center" style="background-color:#000000; height: 80px; text-align: center;">\n\n				<div><img src="{{webServerHost + \'/\' + ads}}" style="height: 80px; margin-top: 0px; padding-top: 0px;" alt="ADS"></div>\n\n			</div>\n\n	</ion-row>\n\n</ion-footer>\n\n<ion-tabs  style="color: #FFFFFF;" class="tabs-item-hide" >\n\n  <ion-tab [root]="tab1Root" tabTitle="" tabIcon=""></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="" tabIcon=""></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="" tabIcon=""></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Lenovo\source\repos\xfmchiangmai\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.ionViewWillEnter = function () {
        console.log('view event');
        this.date = new Date();
        this.monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        this.getDaysOfMonth();
    };
    AboutPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var i = 0; i < thisNumOfDays; i++) {
            this.daysInThisMonth.push(i + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
        for (var i = 0; i < (6 - lastDayThisMonth); i++) {
            this.daysInNextMonth.push(i + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
                this.daysInNextMonth.push(i);
            }
        }
    };
    AboutPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    AboutPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Lenovo\source\repos\xfmchiangmai\src\pages\about\about.html"*/'<menu-sidebar></menu-sidebar>\n\n<ion-content padding class="main-classes" style="background-image: url(\'assets/imgs/bg_page.png\'); background-size: 100% 100%;" >\n\n	<div (swipe)="swipeEvent($event)" style="height: 100%;">\n\n	<br /><br /><br /><br />  \n\n	  <div class="calendar-header">\n\n	    <ion-row class="calendar-month">\n\n	      <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n\n	      <ion-col col-8><span style="font-weight: bolder;">{{currentMonth}} {{currentYear}}</span>\n\n	      	<br><span style="color:red;">EVENT</span> </ion-col>\n\n	      <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n	    </ion-row>\n\n	  </div>\n\n	  <div class="calendar-body">\n\n	    <ion-grid>\n\n	      <ion-row class="calendar-weekday">\n\n	        <ion-col><span style="color:red;">SUN</span></ion-col>\n\n	        <ion-col>MON</ion-col>\n\n	        <ion-col>TUE</ion-col>\n\n	        <ion-col>WED</ion-col>\n\n	        <ion-col>THU</ion-col>\n\n	        <ion-col>FRI</ion-col>\n\n	        <ion-col><span style="color:red;">SAT</span></ion-col>\n\n	      </ion-row>\n\n	      <ion-row class="calendar-date">\n\n	        <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month">{{lastDay}}</ion-col>\n\n	        <ion-col col-1 *ngFor="let day of daysInThisMonth">\n\n	          <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n\n	          <ng-template #otherDate class="otherDate">{{day}}</ng-template>\n\n	        </ion-col>\n\n	        <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month">{{nextDay}}</ion-col>\n\n	      </ion-row>\n\n	    </ion-grid>\n\n	  </div>\n\n\n\n  	<!--<ion-grid>\n\n  		<ion-row style="background-color: #440505; border-radius: 3%; margin-top: 10px;" class="white-color">\n\n  			<ion-col col-12 col-xl-6 offset-xl-3 style="padding: 10px; ">\n\n		  		<div class="obj-center" style="width: 100%;">\n\n			        <img style="height: 250px; width: auto;" src="assets/imgs/studio_x9450.jpg" />\n\n			    </div>\n\n			    <ion-row style="padding-top: 10px; font-size: 0.9em;" >\n\n			        <ion-col col-12>\n\n			          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรม\n\n			        </ion-col>\n\n		      	</ion-row>\n\n			    <ion-row style="padding-top: 10px; font-size: 0.9em;">\n\n			        <ion-col col-6 style="color: #ccc;">\n\n			          <u>ดูรายละเอียด</u>\n\n			        </ion-col>\n\n			        <ion-col col-6 class="obj-right" style=" font-size: 0.9em;color: #ccc;">\n\n			          วันที่ 15 May 2018\n\n			        </ion-col>\n\n		      	</ion-row>\n\n		      </ion-col>\n\n	      </ion-row>\n\n\n\n	      <ion-row style="background-color: #440505; border-radius: 3%; margin-top: 10px;" class="white-color">\n\n  			<ion-col col-12 col-xl-6 offset-xl-3 style="padding: 10px; ">\n\n		  		<div class="obj-center" style="width: 100%;">\n\n			        <img style="height: 250px; width: auto;" src="assets/imgs/studio_x9450.jpg" />\n\n			    </div>\n\n			    <ion-row style="padding-top: 10px; font-size: 0.9em;" >\n\n			        <ion-col col-12>\n\n			          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรม\n\n			        </ion-col>\n\n		      	</ion-row>\n\n			    <ion-row style="padding-top: 10px; font-size: 0.9em;">\n\n			        <ion-col col-6 style="color: #ccc;">\n\n			          <u>ดูรายละเอียด</u>\n\n			        </ion-col>\n\n			        <ion-col col-6 class="obj-right" style=" font-size: 0.9em;color: #ccc;">\n\n			          วันที่ 16 May 2018\n\n			        </ion-col>\n\n		      	</ion-row>\n\n		      </ion-col>\n\n	      </ion-row>\n\n\n\n	      <ion-row style="background-color: #440505; border-radius: 3%; margin-top: 10px;" class="white-color">\n\n  			<ion-col col-12 col-xl-6 offset-xl-3 style="padding: 10px; ">\n\n		  		<div class="obj-center" style="width: 100%;">\n\n			        <img style="height: 250px; width: auto;" src="assets/imgs/studio_x9450.jpg" />\n\n			    </div>\n\n			    <ion-row style="padding-top: 10px; font-size: 0.9em;" >\n\n			        <ion-col col-12>\n\n			          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรม ทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรมทดสอบรายละเอียดกิจกรรม\n\n			        </ion-col>\n\n		      	</ion-row>\n\n			    <ion-row style="padding-top: 10px; font-size: 0.9em;">\n\n			        <ion-col col-6 style="color: #ccc;">\n\n			          <u>ดูรายละเอียด</u>\n\n			        </ion-col>\n\n			        <ion-col col-6 class="obj-right" style=" font-size: 0.9em;color: #ccc;">\n\n			          วันที่ 17 May 2018\n\n			        </ion-col>\n\n		      	</ion-row>\n\n		      </ion-col>\n\n	      </ion-row>\n\n  	</ion-grid>-->\n\n  	<div class="text-center" style="position: absolute; bottom: 25px; left:0px; text-align: center; padding-top:3%; color:#FFFFFF; height: 40px; width: 100%; background: url(\'assets/imgs/slide_next.png\');">\n\n        Slide next to Contact &nbsp;\n\n        <ion-icon style="font-size: 1.3em;" ios="ios-arrow-dropright" md="md-arrow-dropright" item-end></ion-icon>&nbsp;\n\n        <ion-icon style="font-size: 1.3em;" ios="ios-arrow-dropright" md="md-arrow-dropright" item-end></ion-icon>&nbsp;\n\n    </div>\n\n    \n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\source\repos\xfmchiangmai\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Lenovo\source\repos\xfmchiangmai\src\pages\contact\contact.html"*/'<menu-sidebar></menu-sidebar>\n\n<ion-content padding class="main-classes" style="background-image: url(\'assets/imgs/bg_page.png\'); background-size: 100% 100%;">\n\n  <div (swipe)="swipeEvent($event)"  style="height: 100%;">\n\n    <br /><br /><br /><br />\n\n      \n\n      <h1 class="obj-center">\n\n        <ion-icon [color]="light" [name]="\'md-home\'" item-end></ion-icon>\n\n    </h1>\n\n      <h6 class="obj-center">บริษัท เอ็กซ์ เอเจนซี่ จำกัด (สำนักงานใหญ่)</h6>\n\n      <h6 class="obj-center">555/97 หมู่ที่ 4 ต.หนองผึ้ง</h6>\n\n      <h6 class="obj-center">อ.สารภี จ.เชียงใหม่ 50140</h6>\n\n      <h6 class="obj-center">\n\n        <ion-icon [color]="light" [name]="\'md-phone-portrait\'" item-end></ion-icon>\n\n        : 084-222-9275\n\n       </h6>\n\n    <h6 class="obj-center">\n\n        <ion-icon [color]="light" [name]="\'md-mail-open\'" item-end></ion-icon>\n\n        : xfmchiangmai@gmail.com</h6>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\source\repos\xfmchiangmai\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_background_mode__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_app_minimize__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, socialSharing, iab, media, http, storage, statusBar, callNumber, camera, transfer, file, backgroundMode, appMinimize, splashScreen) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.socialSharing = socialSharing;
        this.iab = iab;
        this.media = media;
        this.http = http;
        this.storage = storage;
        this.statusBar = statusBar;
        this.callNumber = callNumber;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.backgroundMode = backgroundMode;
        this.appMinimize = appMinimize;
        this.splashScreen = splashScreen;
        this.webServerHost = 'http://xfmnetwork.com/backoffice/';
        this.mediaHost = 'http://stream.xfmnetwork.com:8613/;stream.mp3';
        this.descSongHost = 'http://plaza.xfmnetwork.com/db/nowplaying.txt';
        this.rootPage = 'HomePage';
        this.subject = 'XFM 94.5 ยิ่งฟังยิ่งใช่ คนเชียงใหม่ฟังเยอะ';
        this.message = 'พร้อมให้บริการฟังเพลงผ่าน Application บนมือถือทั้ง iOS และ Android แล้ววันนี้';
        this.image = 'http://xfmnetwork.com/public/images/soon.png';
        this.uri = 'http://xfmnetwork.com/home';
        this.fbUrl = 'https://www.facebook.com/xfmnetwork/';
        this.igUrl = 'https://www.instagram.com/xfm_chiangmai/?hl=th';
        this.mobileNo = '0842229275';
        this.EVENT_DETAILS = [{ 'topic': 'มหกรรมการเงินเชียงใหม่ มหกรรมการเงินเชียงใหม่ ครั้งที่ 13',
                'event_place': 'เซ็นทรัลพลาซ่าเชียงใหม่ แอร์พอร์ต',
                'event_start_date': '2018-06-21',
                'event_finish_date': '2018-06-28',
                'event_date_text': '21 - 28 June 2018',
                'event_image_url': 'assets/imgs/poster-event.png',
                'event_owner': 'xfm',
                'calendar_notify': 'Y'
            },
            { 'topic': 'มหกรรมการเงินเชียงใหม่ ครั้งที่ 14',
                'event_place': 'เซ็นทรัลพลาซ่าเชียงใหม่ แอร์พอร์ต',
                'event_start_date': '2018-06-21',
                'event_finish_date': '2018-06-30',
                'event_date_text': '21 - 30 June 2018',
                'event_image_url': 'assets/imgs/poster-event.png',
                'event_owner': 'other',
                'calendar_notify': 'N'
            },
            { 'topic': 'มหกรรมการเงินเชียงใหม่ ครั้งที่ 15',
                'event_place': 'เซ็นทรัลเฟสติวัลเชียงใหม่',
                'event_start_date': '2018-07-10',
                'event_finish_date': '2018-07-15',
                'event_date_text': '21 - 30 June 2018',
                'event_image_url': 'assets/imgs/poster-event.png',
                'event_owner': 'xfm',
                'calendar_notify': 'Y'
            }
        ];
        this.SHOW_EVENT_DETAILS = [];
        this.SHOW_PAGE = 'HOME';
        this.cntLoopPlay = 0;
        // console.log(storage.get('media_play'));
        this.splashScreen.show();
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
            _this.statusBar.overlaysWebView(true);
            _this.statusBar.show();
            // set status bar to white
            _this.statusBar.backgroundColorByHexString('#AB2323');
            console.log('device ready');
            _this.platform.registerBackButtonAction(function () {
                //sometimes the best thing you can do is not think, not wonder, not imagine, not obsess. 
                //just breathe, and have faith that everything will work out for the best.
                console.log(_this.SHOW_PAGE);
                if (_this.SHOW_PAGE == 'CONTACT') {
                    console.log('Back to EVENT');
                    _this.prepareEventPage();
                }
                else if (_this.SHOW_PAGE == 'EVENT') {
                    _this.SHOW_PAGE = 'HOME';
                    console.log('Back to HOME');
                }
                else {
                    _this.appMinimize.minimize();
                }
            }, 1);
            // this.prepareEventPage()
            // Set play media
            /*
            this.backgroundMode.enable();
            this.backgroundMode.on('activate');
    
            this._streamPaused = false;
            this.radio = this.media.create(this.mediaHost);
            this.radio.play({'playAudioWhenScreenIsLocked':true});
            this.radio.onStatusUpdate.subscribe(status => this.checkMediaStatus(status));
            this.radio.onSuccess.subscribe(() => console.log('success'));
            this.radio.onError.subscribe(error => (!this._streamPaused?this.radio.play:this.radio.pause));
            console.log('Auto play' , this.radio.getDuration());
            */
            /*
            this.mediaFile = new Audio();
            this.mediaFile.src = this.mediaHost;
            this.startPlay();
            */
            // this.startPlay();
            // this.getSongDesc();
            // setInterval(() => this.getSongDesc(), 5000);
            //setInterval(() => this.loopPlayMedia(), 30000);
            _this.backgroundMode.enable();
            _this.backgroundMode.disableWebViewOptimizations();
            _this.backgroundMode.overrideBackButton();
            _this.backgroundMode.setDefaults({
                icon: 'icon',
                resume: true,
                hidden: false,
                bigText: false
            });
            _this.getConfig();
        });
    }
    HomePage.prototype.swipeEvent = function (e) {
        console.log('Swipe!', e.direction);
        if ((e.direction == 2 && this.SHOW_PAGE == 'HOME') || (e.direction == 4 && this.SHOW_PAGE == 'CONTACT')) {
            //this.navCtrl.setRoot(this.tab2Root);
            this.prepareEventPage();
        }
        else if ((e.direction == 4 && this.SHOW_PAGE == 'EVENT')) {
            this.SHOW_PAGE = 'HOME';
        }
        else if ((e.direction == 2 && this.SHOW_PAGE == 'EVENT')) {
            this.SHOW_PAGE = 'CONTACT';
        }
    };
    HomePage.prototype.getConfig = function () {
        var _this = this;
        this.http.get(this.webServerHost + '/config_service.php', {}, {})
            .then(function (data) {
            var res = JSON.parse(data.data);
            _this.mediaHost = res.mediaHost;
            _this.descSongHost = res.descSongHost;
            _this.subject = res.subject;
            _this.message = res.message;
            _this.image = res.image;
            _this.uri = res.uri;
            _this.fbUrl = res.fbUrl;
            _this.igUrl = res.igUrl;
            _this.mobileNo = res.mobileNo;
            console.log(res.mediaHost);
            _this.startPlay();
            _this.getSongDesc();
            setInterval(function () { return _this.getSongDesc(); }, 5000);
        })
            .catch(function (error) {
            // console.log(error.status);
            // console.log(error.error); // error message as string
            // console.log(error.headers);
        });
    };
    HomePage.prototype.getSongDesc = function () {
        var _this = this;
        if (!this._streamPaused) {
            this.http.get(this.descSongHost, {}, {})
                .then(function (data) {
                _this.songDesc = data.data;
                var songOnNotification = data.data.replace('<h3>', '').replace('</h4>', '');
                songOnNotification = songOnNotification.split('</h3><h4>');
                _this.backgroundMode.setDefaults({ title: songOnNotification[0], text: songOnNotification[1] });
                // this.backgroundMode.enable();
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
        }
    };
    HomePage.prototype.startPlay = function () {
        var _this = this;
        this.backgroundMode.enable();
        this.backgroundMode.disableWebViewOptimizations();
        this.backgroundMode.overrideBackButton();
        this.backgroundMode.setDefaults({
            icon: 'icon',
            resume: true,
            hidden: false,
            bigText: false
        });
        this._streamPaused = false;
        this.radio = this.media.create(this.mediaHost);
        this.radio.play({ 'playAudioWhenScreenIsLocked': true });
        console.log('Press play');
        this.getSongDesc();
        this.radio.onStatusUpdate.subscribe(function (status) { return _this.checkMediaStatus(status); });
        this.radio.onSuccess.subscribe(function () { return _this.checkMediaStatus(_this.mediaStatus); });
        this.radio.onError.subscribe(function (error) { return _this.checkMediaStatus(_this.mediaStatus); });
        /*
          this.backgroundMode.enable();
          this.backgroundMode.disableWebViewOptimizations();
          this.backgroundMode.overrideBackButton();
          this.backgroundMode.setDefaults({
              icon: 'icon'
              ,resume: true
              ,hidden: false
              ,bigText: false
          })
      
          this._streamPaused = false;
          this.mediaFile.play();
          */
    };
    HomePage.prototype.stopPlay = function () {
        this.backgroundMode.disable();
        this.backgroundMode.on('deactivate');
        this._streamPaused = true;
        this.radio.stop();
        console.log('Press pause');
        this.radio.release();
        this.songDesc = '';
        /*
        this.backgroundMode.disable();
        this._streamPaused = true;
        this.mediaFile.pause();
        */
    };
    HomePage.prototype.checkMediaStatus = function (status) {
        if (status == 1) {
            console.log('Media Status : Prepare');
            this.errorMsg = '';
        }
        else if (status == 2) {
            console.log('Media Status : Playing');
            this.errorMsg = '';
        }
        else if (status == 3) {
            console.log('Media Status : Pause');
            this.errorMsg = '';
        }
        else if (status == 4) {
            if (!this._streamPaused) {
                this.radio.stop();
                this.radio.release();
                this.startPlay();
                this.errorMsg = 'Media Error while playing, Force play';
                console.log(this.errorMsg);
            }
            else {
                console.log('Media Status : Stop');
                this.stopPlay();
                this.errorMsg = '';
            }
        }
        else {
            console.log('Other case');
        }
        this.mediaStatus = status;
        this.mediaStatusTxt = this.mediaStatus + ' : ' + (new Date());
    };
    HomePage.prototype.loopPlayMedia = function () {
        var _this = this;
        if (!this._streamPaused) {
            this.radio.play({ 'playAudioWhenScreenIsLocked': true });
            console.log('Loop play');
            this.backgroundMode.enable();
            this.backgroundMode.on('activate');
            this.cntLoopPlay = this.cntLoopPlay + 1;
            this.cntLoopPlayTxt = this.cntLoopPlay + ' : ' + (new Date());
            this.radio.onStatusUpdate.subscribe(function (status) { return _this.checkMediaStatus(status); });
            this.radio.onSuccess.subscribe(function () { return console.log('success'); });
            this.radio.onError.subscribe(function (error) { return (!_this._streamPaused ? _this.radio.play : _this.radio.pause); });
        }
        // console.log('this.radio.getDuration() ', this.radio.getDuration());
    };
    HomePage.prototype.makeCallNumber = function () {
        this.callNumber.callNumber(this.mobileNo, true)
            .then(function (res) { return console.log('Launched dialer!', res); })
            .catch(function (err) { return console.log('Error launching dialer', err); });
    };
    HomePage.prototype.shareViaFacebook = function (socialNet, fab) {
        var _this = this;
        console.log('tab share');
        fab.close();
        console.log("Sharing in", socialNet);
        this.socialSharing.canShareVia('facebook', this.message, null, this.uri)
            .then(function (data) {
            _this.socialSharing.shareViaFacebook(_this.message, null, _this.uri)
                .then(function (data) {
                console.log('Shared via Facebook');
            })
                .catch(function (err) {
                console.log('Was not shared via Facebook');
            });
        })
            .catch(function (err) {
            console.log('Not able to be shared via Facebook', err);
        });
    };
    HomePage.prototype.shareViaInstagram = function (socialNet, fab) {
        var _this = this;
        console.log('tab share');
        fab.close();
        console.log("Sharing in", socialNet);
        this.socialSharing.canShareVia('instagram', this.message, this.image, this.uri)
            .then(function (data) {
            _this.socialSharing.shareViaInstagram(_this.message, _this.image)
                .then(function (data) {
                console.log('Shared via instagram');
            })
                .catch(function (err) {
                console.log('Was not shared via instagram');
            });
        })
            .catch(function (err) {
            console.log('Not able to be shared via instagram', err);
        });
    };
    HomePage.prototype.openFacebook = function () {
        this.iab.create(this.fbUrl, '_blank', { location: 'no' });
    };
    HomePage.prototype.openInstagram = function () {
        this.iab.create(this.igUrl, '_blank', { location: 'no' });
    };
    HomePage.prototype.goToPage = function (pages) {
        this.navCtrl.push(pages);
    };
    // EVENT FUNCTION #########################################################
    HomePage.prototype.prepareEventPage = function () {
        this.SHOW_PAGE = 'EVENT';
        console.log('view event');
        this.date = new Date();
        this.monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
        this.getEventService(this.date);
    };
    HomePage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentMonthInt = this.date.getMonth() + 1;
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var i = 0; i < thisNumOfDays; i++) {
            this.daysInThisMonth.push(i + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
        for (var i = 0; i < (6 - lastDayThisMonth); i++) {
            this.daysInNextMonth.push(i + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
                this.daysInNextMonth.push(i);
            }
        }
    };
    HomePage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getEventService(this.date);
        // this.getDaysOfMonth();
    };
    HomePage.prototype.goToNextMonth = function () {
        console.log('next month');
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getEventService(this.date);
        // this.getDaysOfMonth();
    };
    HomePage.prototype.getEventService = function (date) {
        var _this = this;
        // console.log(date.toISOString().slice(0, 7));
        date = date.toISOString().slice(0, 7);
        this.http.post(this.webServerHost + '/event_service.php', { 'date': date }, {})
            .then(function (data) {
            _this.EVENT_DETAILS = JSON.parse(data.data);
            //console.log(data.status);
            console.log(data.data); // data received by server
            //console.log(data.headers);
            _this.getDaysOfMonth();
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    };
    HomePage.prototype.openDialogEvent = function (day) {
        // console.log(day, this.currentMonthInt, this.currentYear);
        var select_day = day.toString().length == 1 ? '0' + day : day;
        var select_month = this.currentMonthInt.toString().length == 1 ? '0' + this.currentMonthInt : this.currentMonthInt;
        var select_date = this.currentYear + '-' + select_month + '-' + select_day;
        this.selectedDateText = day + ' ' + ' ' + this.currentMonth + ' ' + this.currentYear;
        console.log(select_date);
        // filter event on select day
        var loop = this.EVENT_DETAILS.length;
        this.SHOW_EVENT_DETAILS = [];
        for (var i = 0; i < loop; i++) {
            var checkDate = new Date(select_date);
            var startDate = new Date(this.EVENT_DETAILS[i].event_start_date);
            var finishDate = new Date(this.EVENT_DETAILS[i].event_finish_date);
            if (checkDate >= startDate && checkDate <= finishDate) {
                this.SHOW_EVENT_DETAILS.push(this.EVENT_DETAILS[i]);
            }
        }
        console.log(this.SHOW_EVENT_DETAILS.length);
        this.SHOW_DIALOG_EVENT = true;
    };
    HomePage.prototype.closeDialogEvent = function () {
        var _this = this;
        setTimeout(function () { return _this.SHOW_DIALOG_EVENT = false; }, 100);
    };
    HomePage.prototype.checkEventDate = function (day) {
        var select_day = day.toString().length == 1 ? '0' + day : day;
        var select_month = this.currentMonthInt.toString().length == 1 ? '0' + this.currentMonthInt : this.currentMonthInt;
        var select_date = this.currentYear + '-' + select_month + '-' + select_day;
        var loop = this.EVENT_DETAILS.length;
        for (var i = 0; i < loop; i++) {
            var checkDate = new Date(select_date);
            var startDate = new Date(this.EVENT_DETAILS[i].event_start_date);
            var finishDate = new Date(this.EVENT_DETAILS[i].event_finish_date);
            if (checkDate >= startDate && checkDate <= finishDate && this.EVENT_DETAILS[i].calendar_notify == 'Y') {
                return true;
            }
        }
        return false;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Lenovo\source\repos\xfmchiangmai\src\pages\home\home.html"*/'<menu-sidebar></menu-sidebar>\n\n<ion-content  class="main-classes" style="background-image: url(\'assets/imgs/bg_page_2.png\'); background-size: 100% 100%;" >\n\n	<div [hidden]="SHOW_PAGE != \'HOME\'" (swipe)="swipeEvent($event)" style="height: 100%; ">\n\n	<br /><br /><br /><br /><br /><br /><br>\n\n  	<div class="obj-center">\n\n  		<span [innerHTML]="songDesc"></span>\n\n\n\n  	</div>\n\n	<ion-grid>\n\n		<!--<ion-row>\n\n			<div style="z-index: 999999999; color: #FFF;">\n\n				<br>Loop play : {{cntLoopPlayTxt}}\n\n  				<br>Media status : {{mediaStatusTxt}}\n\n  				<br>Eerror Msg : {{errorMsg}}\n\n			</div>\n\n		</ion-row>-->\n\n		<ion-row>\n\n			<div class = "col col-offset-25">\n\n				<div class="container">\n\n					<div class="circle-outside-share">\n\n						<div class="share-btn" style="left:3%; top:15%; background: transparent;">\n\n							<!--<ion-icon class="icon-play-lause"  style="left: 35%;" [color]="light" [name]="\'md-share\'" item-end></ion-icon>-->\n\n							<ion-fab bottom right #fab>\n\n							   <button ion-fab style="background: transparent;">\n\n							   		<ion-icon style="background-color: transparent; font-weight: bolder; font-size: 3em;" [color]="light" [name]="\'md-share\'" item-end></ion-icon>\n\n							   	</button>\n\n							   <ion-fab-list side="bottom">\n\n							   	<ion-row>\n\n        							<ion-col>\n\n									     <button ion-fab (tap)="shareViaFacebook(\'facebook\', fab)">\n\n									     	<ion-icon [name]="\'logo-facebook\'" item-end></ion-icon>\n\n									     </button>\n\n									</ion-col>\n\n									<ion-col>\n\n									     <button ion-fab (tap)="shareViaInstagram(\'instagram\', fab)">\n\n									     	<ion-icon [name]="\'logo-instagram\'" item-end></ion-icon>\n\n									     </button>\n\n									</ion-col>\n\n								</ion-row>\n\n							   </ion-fab-list>\n\n							 </ion-fab>\n\n						</div>\n\n					</div>\n\n					<div class="circle-outside" (tap)="stopPlay()" *ngIf="!_streamPaused">\n\n						<div class="circle">\n\n							<ion-icon  class="icon-play-lause" [color]="light" [name]="\'pause\'" item-end></ion-icon>\n\n						</div>\n\n					</div>\n\n					<div class="circle-outside" (tap)="startPlay()" *ngIf="_streamPaused">\n\n						<div class="circle">\n\n							<ion-icon class="icon-play" [color]="light" [name]="\'play\'" item-end></ion-icon>\n\n						</div>\n\n					</div>\n\n					<div class="circle-outside-share">\n\n						<div class="share-btn">\n\n							<ion-icon class="icon-play-lause" style="left: 30%; font-weight: bolder;  font-size: 3em;" [color]="light" [name]="\'ios-heart-outline\'" item-end></ion-icon>\n\n						</div>\n\n					</div>\n\n				</div>\n\n			</div>\n\n			<div style="width: 100%; margin-top: -30px; text-align: center;">\n\n				<div style="width: 80%; text-align: center;  margin:0 auto;">\n\n					<ion-range min="20" max="80" step="2" [(ngModel)]="brightness" color="danger" pin="true" style="width: 100%;">\n\n				  	</ion-range>\n\n				</div>\n\n			</div>\n\n		</ion-row>\n\n		\n\n  	</ion-grid>\n\n  	<div class="text-center" style="position: fixed; bottom: 130px; left:0px; text-align: center; padding-top:3%; color:#FFFFFF; width: 100%;">\n\n		<div class="container">\n\n			<div class="icon-general-outside"  (tap)="goToPage(\'AboutPage\')">\n\n				<div class="icon-general">\n\n					<!--<ion-icon class="icon-normal"  style="left: 35%;" [color]="light" [name]="\'md-videocam\'" item-end></ion-icon>-->\n\n					<img style="height: 2.3em; width: auto;" src="assets/imgs/live.png" />\n\n				</div>\n\n			</div>\n\n			<div class="icon-general-outside" (tap)="makeCallNumber()">\n\n				<div class="icon-general">\n\n					<img style="height: 2.7em; width: auto;" src="assets/imgs/tel.png" />\n\n				</div>\n\n			</div>\n\n			<!--<div class="icon-general-outside" (tap)="sendSMS(\'Test text messages\')">\n\n				<div class="icon-general">\n\n					<ion-icon class="icon-normal" style="left: 32%;" [color]="light" [name]="\'md-text\'" item-end></ion-icon>\n\n				</div>\n\n			</div>-->\n\n			<div class="icon-general-outside" (tap)="openFacebook()">\n\n				<div class="icon-general">\n\n					<img style="height: 3em; width: auto;" src="assets/imgs/facebook.png" />\n\n				</div>\n\n			</div>\n\n			<div class="icon-general-outside" (tap)="openInstagram()">\n\n				<div class="icon-general">\n\n					<img style="height: 3em; width: auto;" src="assets/imgs/ig.png" />\n\n				</div>\n\n			</div>\n\n		</div>\n\n	</div>\n\n	<div class="text-center" style="position: fixed; bottom: 80px; left:0px; text-align: center; padding-top:3%; color:#FFFFFF; height: 40px; width: 100%; background: url(\'assets/imgs/slide_next.png\');">\n\n		Next to Calendar &nbsp;\n\n		<ion-icon style="font-size: 1.3em;" ios="ios-arrow-dropright" md="md-arrow-dropright" item-end></ion-icon>&nbsp;\n\n		<ion-icon style="font-size: 1.3em;" ios="ios-arrow-dropright" md="md-arrow-dropright" item-end></ion-icon>&nbsp;\n\n	</div>\n\n  </div>\n\n\n\n  <div class="event-calendar" [hidden]="SHOW_PAGE != \'EVENT\'" (swipe)="swipeEvent($event)" style="height: 100%; width: 100%; display: flex;align-items: center;justify-content: center;">\n\n		<div style="width: 100%; height: 60%;"> \n\n		  <div class="calendar-header">\n\n		    <ion-row class="calendar-month">\n\n		      <ion-col col-2 (click)="goToLastMonth()" style="text-align: center; vertical-align: middle; padding-top: 10px;">\n\n		      		<img style="height: 2.3em; width: auto;" src="assets/imgs/arrow_month_1.png" />\n\n		      </ion-col>\n\n		      <ion-col col-8>\n\n		      	<ion-row>\n\n		      		<ion-col col-9 style="text-align: center; vertical-align: middle; padding-top: 7px;">\n\n				      	<span style="font-weight: bolder; font-size: 1.8em; top: 7px;">{{currentMonth}}</span>\n\n				      	\n\n				      </ion-col>\n\n				      <ion-col col-3 style="text-align: left; vertical-align: middle;">\n\n				      	<span style="font-size: 0.8em; color:#FFF;">{{currentYear}}</span>\n\n				      	<span style="font-size: 0.7em; color:red;">EVENT</span>\n\n				      </ion-col>\n\n			      </ion-row>\n\n			  </ion-col>\n\n		      <ion-col col-2 (click)="goToNextMonth() "style="text-align: center; vertical-align: middle; padding-top: 10px;">\n\n		      	<img style="height: 2.3em; width: auto;" src="assets/imgs/arrow_month_2.png" />\n\n		      </ion-col>\n\n		    </ion-row>\n\n		  </div>\n\n		  <div class="calendar-body">\n\n		    <ion-grid>\n\n		      <ion-row class="calendar-weekday">\n\n		        <ion-col><span style="color:red;">SUN</span></ion-col>\n\n		        <ion-col>MON</ion-col>\n\n		        <ion-col>TUE</ion-col>\n\n		        <ion-col>WED</ion-col>\n\n		        <ion-col>THU</ion-col>\n\n		        <ion-col>FRI</ion-col>\n\n		        <ion-col><span style="color:red;">SAT</span></ion-col>\n\n		      </ion-row>\n\n		      <ion-row class="calendar-date">\n\n		        <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month" style="border-bottom: 0.1em solid #ccc; padding-top: 15px; padding-bottom: 15px;" >{{lastDay}}</ion-col>\n\n		        <ion-col col-1 *ngFor="let day of daysInThisMonth" style="border-bottom: 0.1em solid #ccc; padding-top: 15px; padding-bottom: 15px;"  (tap)="openDialogEvent(day)">\n\n		          <!--<span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>-->\n\n		          <span class="currentDate" *ngIf="checkEventDate(day); else otherDate">{{day}}</span>\n\n		          <ng-template #otherDate class="otherDate">{{day}}</ng-template>\n\n		        </ion-col>\n\n		        <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month" style="border-bottom: 0.1em solid #ccc; padding-top: 15px; padding-bottom: 15px;">{{nextDay}}</ion-col>\n\n		      </ion-row>\n\n		    </ion-grid>\n\n		  </div>\n\n		  <div class="text-center" style="position: fixed; bottom: 80px; left:0px; text-align: center; padding-top:3%; color:#FFFFFF; height: 40px; width: 100%; background: url(\'assets/imgs/slide_next.png\');">\n\n		  	<ion-icon style="font-size: 1.3em;" ios="ios-arrow-dropleft" md="md-arrow-dropleft" item-end></ion-icon>&nbsp;\n\n	        <ion-icon style="font-size: 1.3em;" ios="ios-arrow-dropleft" md="md-arrow-dropleft" item-end></ion-icon>&nbsp;\n\n	        Back to Music &nbsp;<span style="color:#000000;">|</span> &nbsp;\n\n	        Next to Contact &nbsp;\n\n	        <ion-icon style="font-size: 1.3em;" ios="ios-arrow-dropright" md="md-arrow-dropright" item-end></ion-icon>&nbsp;\n\n	        <ion-icon style="font-size: 1.3em;" ios="ios-arrow-dropright" md="md-arrow-dropright" item-end></ion-icon>&nbsp;\n\n	    </div>\n\n	    <div class="dialog-event" *ngIf="SHOW_DIALOG_EVENT">\n\n		    <div class="dialog-event-content">\n\n		    	<div class="dialog-event-close" (tap)="closeDialogEvent()">\n\n		    		<img style="height: 3.5em; width: auto;" src="assets/imgs/close.png" />\n\n		    	</div>\n\n		    	<div class="event-section" *ngFor="let item of SHOW_EVENT_DETAILS">\n\n			    	<div class="dialog-event-header">\n\n			    		<!--{{selectedDateText}}-->\n\n			    		{{ item.event_date_text }} \n\n			    	</div>\n\n			    	<div class="dialog-event-body">\n\n			    		<!--<ion-scroll zooming="true" direction="xy" style="height: 22em; width: auto;">\n\n			    			<div style="height: 22em; width: auto; background: url(\'../../{{item.event_image_url}}\') no-repeat"></div>\n\n				    		<img style="height: 22em; width: auto;" src="{{item.event_image_url}}"  />\n\n				    	</ion-scroll>-->\n\n				    	<img style="height: 22em; width: auto;" src="{{webServerHost}}/{{item.event_image_url}}" *ngIf="item.event_image_url != \'\'" />\n\n				    	<div class="content-text" *ngIf="item.event_image_url == null || item.event_image_url == \'\'">{{ item.topic }}\n\n				    	<br><br>\n\n				    	Place : {{ item.event_place }}\n\n				    	</div>\n\n			    	</div>\n\n			    	\n\n			    </div>\n\n			    <div *ngIf="SHOW_EVENT_DETAILS.length == 0">\n\n			    	<div class="dialog-event-header">\n\n			    		{{selectedDateText}}\n\n			    	</div>\n\n			    	<div class="dialog-event-body">\n\n			    		<br><br><br><br><br><br><br>\n\n				    	There are no event on this day\n\n				    </div>\n\n			    </div>\n\n		    </div>\n\n    	</div>\n\n    </div>\n\n	</div>\n\n\n\n	<div  [hidden]="SHOW_PAGE != \'CONTACT\'" (swipe)="swipeEvent($event)"  style="height: 100%; width: 100%; display: flex;align-items: center;justify-content: center;">\n\n      	<div style=" width: 100%; height: 67%;">\n\n			<h6 class="obj-center" style="color:#D21717; font-size: 2em;">X AGENCY CO.,LTD.</h6>\n\n			<h6 class="obj-center" style=" font-size: 1em;">X-STUDIO 4th FLOOR ZONE MAJOR CINEPLEX CENTRALPLAZA CHIANGMAI AIRPORT</h6>\n\n			<h6 class="obj-center" style=" font-size: 1.1em; font-weight: bold;">\n\n			xfmchiangmai@gmail.com\n\n			<br>\n\n			www.xfmnetwork.com\n\n			</h6>\n\n\n\n			<h6 class="obj-center" style=" font-size: 1.1em;">\n\n			091-914-4664\n\n			</h6>\n\n		   	<div class="obj-center" style="padding-top: 0.5em;">\n\n		   		<img src="assets/imgs/xfm_line.jpg" style="height: 10em; width: auto;">\n\n		   	</div>\n\n		</div>\n\n	    <div class="text-center" style="position: fixed; bottom: 80px; left:0px; text-align: center; padding-top:3%; color:#FFFFFF; height: 40px; width: 100%; background: url(\'assets/imgs/slide_next.png\');">\n\n	        <ion-icon style="font-size: 1.3em;" ios="ios-arrow-dropleft" md="md-arrow-dropleft" item-end></ion-icon>&nbsp;\n\n	        <ion-icon style="font-size: 1.3em;" ios="ios-arrow-dropleft" md="md-arrow-dropleft" item-end></ion-icon>&nbsp;\n\n	        Back to Calendar &nbsp;\n\n	        \n\n	    </div>\n\n    \n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\source\repos\xfmchiangmai\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_app_minimize__["a" /* AppMinimize */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(239);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_media__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_components_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_crop__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_date_picker__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_facebook__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_background_mode__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_app_minimize__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_media__["a" /* Media */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_crop__["a" /* Crop */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_app_minimize__["a" /* AppMinimize */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Lenovo\source\repos\xfmchiangmai\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Lenovo\source\repos\xfmchiangmai\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_sidebar_menu_sidebar__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__menu_sidebar_menu_sidebar__["a" /* MenuSidebarComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__menu_sidebar_menu_sidebar__["a" /* MenuSidebarComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__menu_sidebar_menu_sidebar__["a" /* MenuSidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_crop__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the MenuSidebarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenuSidebarComponent = /** @class */ (function () {
    function MenuSidebarComponent(menuCtrl, storage, camera, transfer, file, crop, datePicker, zone, http, fb, platform) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.crop = crop;
        this.datePicker = datePicker;
        this.zone = zone;
        this.http = http;
        this.fb = fb;
        this.platform = platform;
        this.webServerHost = 'http://xfmnetwork.com/backoffice/';
        this.SHOW_REGISTER = false;
        this.SHOW_UPDATE_PROFILE = false;
        this.SHOW_VIEW_PROFILE = false;
        // console.log('Hello MenuSidebarComponent Component');
        // this.text = 'Hello World';
        this.PERSON_PROFILE = { 'id': '',
            'img_profile': '',
            'username': '',
            'firstname': '',
            'lastname': '',
            'birthday': '',
            'birthday_show': '',
            'mobile': '',
            'gender': 'M',
            'register_type': 'NORMAL'
        };
        // this.storage.remove('PERSON_PROFILE');
        storage.get('PERSON_PROFILE').then(function (val) {
            console.log(val);
            if ((val != null && val != '')) {
                //storage.set('PERSON_PROFILE', );
                console.log('Already session');
                _this.PERSON_PROFILE = JSON.parse(val);
            }
        });
        this.platform.registerBackButtonAction(function () {
            //sometimes the best thing you can do is not think, not wonder, not imagine, not obsess. 
            //just breathe, and have faith that everything will work out for the best.
            _this.SHOW_REGISTER = false;
            _this.SHOW_UPDATE_PROFILE = false;
            _this.SHOW_VIEW_PROFILE = false;
        }, 1);
    }
    MenuSidebarComponent.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    MenuSidebarComponent.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    MenuSidebarComponent.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    MenuSidebarComponent.prototype.viewProfile = function () {
        this.SHOW_VIEW_PROFILE = true;
    };
    MenuSidebarComponent.prototype.back = function () {
        this.SHOW_VIEW_PROFILE = false;
    };
    MenuSidebarComponent.prototype.loginFacebook = function () {
        var _this = this;
        this.fb.login(['email', 'public_profile']).then(function (response) {
            _this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(300).height(300).as(picture_large)', []).then(function (profile) {
                _this.PERSON_PROFILE.username = profile['email'];
                _this.PERSON_PROFILE.firstname = profile['first_name'];
                _this.PERSON_PROFILE.lastname = profile['last_name'];
                _this.PERSON_PROFILE.img_profile = profile['picture_large']['data']['url'];
                _this.PERSON_PROFILE.register_type = 'FACEBOOK';
                // Force register
                _this.http.post(_this.webServerHost + '/account_service.php', { 'data': { 'ACTION': 'ADD', 'USER': _this.PERSON_PROFILE } }, {})
                    .then(function (data) {
                    var result = JSON.parse(data.data);
                    if (result.STATUS == 'OK') {
                        console.log(result.id);
                        if (result.id != null) {
                            console.log('first time signin', result.MSG);
                            _this.PERSON_PROFILE.id = result.id;
                        }
                        else {
                            console.log('already signin', result.MSG.id);
                            _this.PERSON_PROFILE.id = result.MSG.id;
                        }
                        _this.storage.set('PERSON_PROFILE', JSON.stringify(_this.PERSON_PROFILE));
                    }
                    else {
                        _this.PERSON_PROFILE = { 'id': '', 'img_profile': '',
                            'username': '',
                            'firstname': '',
                            'lastname': '',
                            'birthday': '',
                            'birthday_show': '',
                            'mobile': '',
                            'gender': 'M',
                            'register_type': 'NORMAL'
                        };
                        alert(result.MSG);
                    }
                })
                    .catch(function (error) {
                    console.log(error.status);
                    console.log(error.error); // error message as string
                    console.log(error.headers);
                });
            });
        });
    };
    MenuSidebarComponent.prototype.login = function () {
        var _this = this;
        if (this.username == null || this.password == null) {
            alert('Username and Password cannot be empty!');
            return false;
        }
        this.http.post(this.webServerHost + '/account_service.php', { 'data': { 'ACTION': 'LOGIN', 'USER': { 'username': this.username, 'password': this.password } } }, {})
            .then(function (data) {
            var result = JSON.parse(data.data);
            if (result.STATUS == 'OK') {
                _this.storage.set('PERSON_PROFILE', JSON.stringify(result.MSG));
                _this.PERSON_PROFILE = result.MSG;
            }
            else {
                alert(result.MSG);
            }
        });
    };
    MenuSidebarComponent.prototype.logout = function () {
        this.storage.remove('PERSON_PROFILE');
        this.PERSON_PROFILE = { 'id': '', 'img_profile': '',
            'username': '',
            'firstname': '',
            'lastname': '',
            'birthday': '',
            'birthday_show': '',
            'mobile': '',
            'gender': 'M',
            'register_type': 'NORMAL'
        };
        console.log('logout');
    };
    MenuSidebarComponent.prototype.showRegister = function () {
        console.log('show register page');
        this.SHOW_REGISTER = true;
        this.menuCtrl.close();
    };
    MenuSidebarComponent.prototype.cancelRegister = function () {
        this.PERSON_PROFILE = { 'id': '', 'img_profile': '',
            'username': '',
            'firstname': '',
            'lastname': '',
            'birthday': '',
            'birthday_show': '',
            'mobile': '',
            'gender': 'M',
            'register_type': 'NORMAL'
        };
        this.SHOW_REGISTER = false;
    };
    MenuSidebarComponent.prototype.confirmRegister = function (PERSON_PROFILE) {
        var _this = this;
        if (PERSON_PROFILE.username == '' || PERSON_PROFILE.password == '') {
            alert('Username and Password cannot be empty!');
            return false;
        }
        // console.log('res', JSON.stringify(PERSON_PROFILE));
        this.http.post(this.webServerHost + '/account_service.php', { 'data': { 'ACTION': 'ADD', 'USER': PERSON_PROFILE } }, {})
            .then(function (data) {
            var result = JSON.parse(data.data);
            //console.log(data.status);
            console.log(result); // data received by server
            if (result.STATUS == 'OK') {
                _this.storage.set('PERSON_PROFILE', JSON.stringify(PERSON_PROFILE));
            }
            else {
                _this.PERSON_PROFILE = { 'id': '', 'img_profile': '',
                    'username': '',
                    'firstname': '',
                    'lastname': '',
                    'birthday': '',
                    'birthday_show': '',
                    'mobile': '',
                    'gender': 'M',
                    'register_type': 'NORMAL'
                };
                alert(result.MSG);
            }
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
        this.SHOW_REGISTER = false;
    };
    MenuSidebarComponent.prototype.updateProfile = function () {
        this.SHOW_UPDATE_PROFILE = true;
    };
    MenuSidebarComponent.prototype.confirmUpdate = function (PERSON_PROFILE) {
        var _this = this;
        // console.log('res', JSON.stringify(PERSON_PROFILE));
        this.http.post(this.webServerHost + '/account_service.php', { 'data': { 'ACTION': 'UPDATE', 'USER': PERSON_PROFILE } }, {})
            .then(function (data) {
            var result = JSON.parse(data.data);
            //console.log(data.status);
            console.log(result); // data received by server
            if (result.STATUS == 'OK') {
                _this.storage.set('PERSON_PROFILE', JSON.stringify(PERSON_PROFILE));
            }
            else {
                _this.PERSON_PROFILE = { 'id': '', 'img_profile': '',
                    'username': '',
                    'firstname': '',
                    'lastname': '',
                    'birthday': '',
                    'birthday_show': '',
                    'mobile': '',
                    'gender': 'M',
                    'register_type': 'NORMAL'
                };
                alert(result.MSG);
            }
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
        this.SHOW_UPDATE_PROFILE = false;
    };
    MenuSidebarComponent.prototype.cancelUpdate = function () {
        this.SHOW_UPDATE_PROFILE = false;
    };
    MenuSidebarComponent.prototype.chooseBirthday = function () {
        var _this = this;
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return _this.setBirthdaySelected(date); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    MenuSidebarComponent.prototype.setBirthdaySelected = function (date) {
        var month = date.getMonth() + 1;
        var select_month = month.toString().length == 1 ? '0' + month : month;
        var select_date = date.getDate().toString().length == 1 ? '0' + date.getDate() : date.getDate();
        var selectedDateText = date.getFullYear() + '-' + select_month + '-' + select_date;
        this.PERSON_PROFILE.birthday = selectedDateText; //date.toISOString().slice(0, 10); 
        this.PERSON_PROFILE.birthday_show = date.toLocaleDateString('en-GB');
        console.log(this.PERSON_PROFILE.birthday, this.PERSON_PROFILE.birthday_show);
    };
    MenuSidebarComponent.prototype.choosePhoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            sourceType: 0,
            allowEdit: true,
            targetWidth: 300,
            targetHeight: 300
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.myPhoto = 'data:image/jpeg;base64,'; //+ imageData;
            // this.webServerHost = 'http://192.168.1.4/xfm_backoffice/';
            //  console.log(this.webServerHost + '/account_service.php');
            console.log(_this.myPhoto);
            _this.http.post(_this.webServerHost + '/account_service.php', { 'data': { 'ACTION': 'UPLOAD_PROFILE_PICTURE', 'id': _this.PERSON_PROFILE.id, 'base64encodeImage': _this.myPhoto } }, {})
                .then(function (data) {
                var result = JSON.parse(data.data);
                //console.log(data.status);
                console.log(result); // data received by server
                if (result.STATUS == 'OK') {
                    _this.PERSON_PROFILE.img_profile = _this.myPhoto;
                    _this.storage.set('PERSON_PROFILE', JSON.stringify(_this.PERSON_PROFILE));
                }
                else {
                    alert(result.MSG);
                }
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
        }, function (err) {
            // Handle error
        });
    };
    MenuSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'menu-sidebar',template:/*ion-inline-start:"C:\Users\Lenovo\source\repos\xfmchiangmai\src\components\menu-sidebar\menu-sidebar.html"*/'<div *ngIf="PERSON_PROFILE.username != \'\'">\n\n<ion-menu [content]="mycontent">\n\n\n\n  <ion-header style="padding: 45px; height:45%;">\n\n    <ion-row>\n\n      <div class="col col-lg-12 obj-center" (tap)="choosePhoto()">\n\n        <img src="./assets/imgs/edit_pic.png" style="position: absolute; top:5%; right: 20%; width: 7%;" />\n\n        <img class="circle-pic" src="{{PERSON_PROFILE.img_profile}}" *ngIf="PERSON_PROFILE != null" />\n\n      </div>\n\n    </ion-row>\n\n    <ion-row>\n\n      <div class="col col-lg-12 obj-center" style="color:#ccc; font-size: 1.3em;" *ngIf="PERSON_PROFILE != null">\n\n        {{PERSON_PROFILE.username}}\n\n      </div>\n\n    </ion-row>\n\n    <ion-row>\n\n      <div class="col col-lg-12 obj-center" style="color:#ccc; font-size: 0.9em;" *ngIf="PERSON_PROFILE != null">\n\n        {{PERSON_PROFILE.firstname}} {{PERSON_PROFILE.lastname}}\n\n      </div>\n\n    </ion-row>\n\n  </ion-header>\n\n  <ion-content  class="menu-style">\n\n    <ion-list  class="menu-style">\n\n    	<ion-item detail-none (tap)="viewProfile()">ข้อมูลผู้ใช้</ion-item>\n\n    	<ion-item detail-none (tap)="updateProfile()">แก้ไขข้อมูล</ion-item>\n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer style="text-align: center; margin-bottom: 20px;">\n\n    <span style="font-size: 0.7em;">XFM 94.5 v 1.0</span>\n\n    <br>\n\n    <ion-row style="padding-top: 15px;">\n\n          <div class="col col-lg-12 obj-center"  style="text-align: center; background-color: #af1524; padding: 15px;"  (tap)="logout()">\n\n               \n\n                <ion-icon [name]="\'md-log-out\'" item-end></ion-icon>\n\n               \n\n                Logout\n\n          </div>\n\n    </ion-row>\n\n  </ion-footer>\n\n</ion-menu>\n\n</div>\n\n\n\n<div *ngIf="PERSON_PROFILE.username == \'\'">\n\n<ion-menu [content]="mycontent">\n\n\n\n  <ion-header >\n\n    <div style="padding-top: 2%; padding-bottom: 2%; background-image: url(\'assets/imgs/headline_burger.png\');\n\n     background-repeat: no-repeat;background-size:cover;text-align: center;">\n\n    <ion-title>\n\n      <ion-row >\n\n        <div class = "col col-offset-33 obj-center white-color" style="padding-top:3%;">\n\n          <img style="height: 38px; width: auto;" src="assets/imgs/logo_head.png" />\n\n        </div>\n\n      </ion-row>\n\n    </ion-title>\n\n    </div>\n\n  </ion-header>\n\n  <ion-content  class="menu-style obj-center">\n\n      <ion-row class="text-center" style="width: 100%; text-align: center;">\n\n        <div class="div-textbox col col-lg-12 obj-center">\n\n          <input class="my-textbox" type="email" [(ngModel)]="username" placeholder="Username">\n\n        </div>\n\n      </ion-row>\n\n      <ion-row class="text-center" style="width: 100%; text-align: center;">\n\n        <div class="div-textbox col col-lg-12 obj-center">\n\n          <input class="my-textbox" type="password" [(ngModel)]="password" placeholder="Password">\n\n        </div>\n\n      </ion-row>\n\n      <ion-row style="padding-top: 25px;">\n\n          <div class="col col-lg-12 obj-center"  style="text-align: center; background-color: #35a544; padding: 15px; font-size: 1.3em;" (tap)="login()">\n\n              Login\n\n          </div>\n\n      </ion-row>\n\n      <ion-row class="text-center" style="width: 100%; text-align: center;">\n\n        <div class="div-textbox col col-lg-12 obj-center" style="padding-top: 30px; margin: 0px;" (tap)="loginFacebook()">\n\n          <div style="background-color: #FFFFFF; width: 100%; padding: 0px;">\n\n            <img style="height: 38px; width: auto;" src="assets/imgs/facebook_login.png" />\n\n            {{FB_PROFILE}}\n\n          </div>\n\n        </div>\n\n      </ion-row>\n\n      <!--\n\n      <ion-row class="text-center" style="width: 100%; text-align: center; margin: 0px;">\n\n        <div class="div-textbox col col-lg-12 obj-center" style="padding-top: 0px;">\n\n          <div style="background-color: #FFFFFF; width: 100%; padding: 0px;">\n\n            <img style="height: 38px; width: auto;" src="assets/imgs/twitter_login.png" />\n\n          </div>\n\n        </div>\n\n      </ion-row>\n\n      <ion-row class="text-center" style="width: 100%; text-align: center; margin: 0px;">\n\n        <div class="div-textbox col col-lg-12 obj-center" style="padding-top: 0px; ">\n\n          <div style="background-color: #FFFFFF; width: 100%; padding: 0px;">\n\n            <img style="height: 38px; width: auto;" src="assets/imgs/google_login.png" />\n\n          </div>\n\n        </div>\n\n      </ion-row>\n\n      -->\n\n      <ion-row style="padding: 0px;">\n\n          <div class="col col-lg-12 obj-center"  style="text-align: center; padding-top: 5px; font-size: 1.1em;">\n\n              - - - - - - - or - - - - - - -\n\n          </div>\n\n      </ion-row>\n\n      <ion-row style="padding-top: 5px;">\n\n          <div class="col col-lg-12 obj-center"  style="text-align: center; background-color: #af1524; padding: 15px;font-size: 1.3em;" (tap)="showRegister()">\n\n              \n\n              <span style="font-weight: bolder;">X</span> Register\n\n          </div>\n\n    </ion-row>\n\n  </ion-content>\n\n  \n\n</ion-menu>\n\n</div>\n\n\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n\n\n\n<ion-header>\n\n    <div style="padding-top: 1%; padding-bottom: 1%; background-image: url(\'assets/imgs/headline.png\');\n\n     background-repeat: no-repeat;background-size:cover;text-align: center;">\n\n    <ion-title>\n\n    	<ion-row >\n\n    		<div class = "col col-offset-33 white-color medium-size" style="text-align: left;">\n\n				<ion-icon [color]="light" [name]="\'menu\'" menuToggle item-end></ion-icon>\n\n		    </div>\n\n		    <div class = "col col-offset-33 obj-center white-color" style="padding-top:3%;">\n\n		    	<img style="height: 38px; width: auto;" src="assets/imgs/logo_head.png" />\n\n		    </div>\n\n		    <div class = "col col-offset-33 obj-right white-color medium-size">\n\n          \n\n        </div>\n\n	    </ion-row>\n\n    </ion-title>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content *ngIf="SHOW_REGISTER" style="background-image: url(\'assets/imgs/bg_page_2.png\'); background-size: 100% 100%; z-index: 999; color: #FFFFFF;overflow: scroll;">\n\n  <ion-row>\n\n     <div class="col col-lg-12 obj-center" style="padding-top: 1.5em;">\n\n      <img src="assets/imgs/logo_regis_page.png" style="height: 5em;">\n\n      <br>\n\n      <h3>- REGISTER -</h3>\n\n    </div>\n\n  </ion-row>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      E-mail : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%;">\n\n      <input class="my-textbox" type="email" [(ngModel)]="PERSON_PROFILE.username" placeholder="E-mail">\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Password : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%;">\n\n      <input class="my-textbox" type="password" [(ngModel)]="PERSON_PROFILE.password" placeholder="Password">\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Name : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%;">\n\n      <input class="my-textbox" type="text" [(ngModel)]="PERSON_PROFILE.firstname" placeholder="Name">\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Surname : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%;">\n\n      <input class="my-textbox" type="text" [(ngModel)]="PERSON_PROFILE.lastname" placeholder="Surname">\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Birthday : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%;">\n\n      <input class="my-textbox" [(ngModel)]="PERSON_PROFILE.birthday_show" placeholder="Birthday" (tap)="chooseBirthday()">\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Mobile : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%;">\n\n      <input class="my-textbox" type="number" [(ngModel)]="PERSON_PROFILE.mobile" placeholder="Mobile">\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Gender : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%; padding-top: 5px;">\n\n      \n\n        <input type="radio" [(ngModel)]="PERSON_PROFILE.gender" value="M" id="gender_male"> <label for="gender_male">MALE</label> &nbsp;&nbsp;&nbsp;\n\n        <input type="radio" [(ngModel)]="PERSON_PROFILE.gender" value="F" id="gender_female"> <label for="gender_female">FEMALE </label>\n\n      \n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 10px; text-align: center;">\n\n    <div style="width: 100%; text-align: center; padding-top: 5px; font-size: 1.2em;" (tap)="confirmRegister(PERSON_PROFILE)">\n\n      <img style="height: 38px; width: auto;" src="assets/imgs/confirm_regis_page.png" />\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 100%; text-align: center; padding-top: 0px; font-size: 1.2em;" (tap)="cancelRegister()">\n\n      <img style="height: 38px; width: auto;" src="assets/imgs/cancel_regis_page.png" />\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-content *ngIf="SHOW_UPDATE_PROFILE" style="background-image: url(\'assets/imgs/bg_page_2.png\'); background-size: 100% 100%; z-index: 999; color: #FFFFFF; overflow: scroll;">\n\n  <ion-row>\n\n     <div class="col col-lg-12 obj-center" style="padding-top: 1.5em;">\n\n      <img src="assets/imgs/logo_regis_page.png" style="height: 5em;">\n\n      <br>\n\n      <h3>- UPDATE PROFILE -</h3>\n\n    </div>\n\n  </ion-row>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      E-mail : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%;">\n\n      <input class="my-textbox" type="email" [(ngModel)]="PERSON_PROFILE.username" placeholder="E-mail">\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Password : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%;">\n\n      <input class="my-textbox" type="password" [(ngModel)]="PERSON_PROFILE.password" placeholder="Password">\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Name : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%;">\n\n      <input class="my-textbox" type="text" [(ngModel)]="PERSON_PROFILE.firstname" placeholder="Name">\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Surname : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%;">\n\n      <input class="my-textbox" type="text" [(ngModel)]="PERSON_PROFILE.lastname" placeholder="Surname">\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Birthday : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%;">\n\n      <input class="my-textbox" [(ngModel)]="PERSON_PROFILE.birthday_show" placeholder="Birthday" (tap)="chooseBirthday()">\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Mobile : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%;">\n\n      <input class="my-textbox" type="number" [(ngModel)]="PERSON_PROFILE.mobile" placeholder="Mobile">\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 30%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Gender : \n\n    </div>\n\n    <div style="width: 60%; margin-right: 5%; margin-left: 5%; padding-top: 5px;">\n\n      \n\n        <input type="radio" [(ngModel)]="PERSON_PROFILE.gender" value="M" id="gender_male"> <label for="gender_male">MALE</label> &nbsp;&nbsp;&nbsp;\n\n        <input type="radio" [(ngModel)]="PERSON_PROFILE.gender" value="F" id="gender_female"> <label for="gender_female">FEMALE </label>\n\n      \n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 10px; text-align: center;">\n\n    <div style="width: 100%; text-align: center; padding-top: 5px; font-size: 1.2em;" (tap)="confirmUpdate(PERSON_PROFILE)">\n\n      <img style="height: 38px; width: auto;" src="assets/imgs/confirm_regis_page.png" />\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 100%; text-align: center; padding-top: 0px; font-size: 1.2em;" (tap)="cancelUpdate()">\n\n      <img style="height: 38px; width: auto;" src="assets/imgs/cancel_regis_page.png" />\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-content *ngIf="SHOW_VIEW_PROFILE" style="background-image: url(\'assets/imgs/bg_page_2.png\'); background-size: 100% 100%; z-index: 999; color: #FFFFFF;overflow: scroll;">\n\n  <ion-row>\n\n     <div class="col col-lg-12 obj-center" style="padding-top: 1.5em;">\n\n      <img src="assets/imgs/logo_regis_page.png" style="height: 5em;">\n\n      <br>\n\n      <h3>- VIEW PROFILE -</h3>\n\n    </div>\n\n  </ion-row>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 90%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      E-mail : {{PERSON_PROFILE.username}}\n\n    </div>\n\n    \n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 90%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Name : {{PERSON_PROFILE.firstname}} {{PERSON_PROFILE.lastname}}\n\n    </div>\n\n    \n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 90%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Birthday : {{PERSON_PROFILE.birthday_show}}\n\n    </div>\n\n    \n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 90%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Mobile : {{PERSON_PROFILE.mobile}}\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 90%; text-align: left; padding-top: 5px; font-size: 1.2em;padding-left: 5%;">\n\n      Gender : {{ PERSON_PROFILE.gender==\'M\'?\'MALE\':\'FEMALE\'}}\n\n    </div>\n\n  </div>\n\n  <div class="row" style="margin-top: 5px;">\n\n    <div style="width: 100%; text-align: center; padding-top: 0px; font-size: 1.2em;" (tap)="back()">\n\n      <img style="height: 38px; width: auto;" src="assets/imgs/cancel_regis_page.png" />\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Lenovo\source\repos\xfmchiangmai\src\components\menu-sidebar\menu-sidebar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__["a" /* DatePicker */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]])
    ], MenuSidebarComponent);
    return MenuSidebarComponent;
}());

//# sourceMappingURL=menu-sidebar.js.map

/***/ })

},[217]);
//# sourceMappingURL=main.js.map