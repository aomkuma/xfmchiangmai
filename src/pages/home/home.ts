import { Component,/* AfterViewInit */ } from '@angular/core';
import { NavController, Platform, FabContainer } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Media, MediaObject } from '@ionic-native/media';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { CallNumber } from '@ionic-native/call-number';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HTTP } from '@ionic-native/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AppMinimize } from '@ionic-native/app-minimize';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public webServerHost : string = 'http://xfmnetwork.com/backoffice/';
  public mediaHost : string = 'http://stream.xfmnetwork.com:8613/;stream.mp3';
  public descSongHost : string = 'http://plaza.xfmnetwork.com/db/nowplaying.txt';
  _streamPaused:boolean

  rootPage:any = 'HomePage';
  
  public sendTo   : any;
  public subject  : string = 'XFM 94.5 ยิ่งฟังยิ่งใช่ คนเชียงใหม่ฟังเยอะ';
  public message  : string = 'พร้อมให้บริการฟังเพลงผ่าน Application บนมือถือทั้ง iOS และ Android แล้ววันนี้';
  public image    : string  = 'http://xfmnetwork.com/public/images/soon.png';
  public uri      : string  = 'http://xfmnetwork.com/home';
  public fbUrl : string = 'https://www.facebook.com/xfmnetwork/';
  public igUrl : string = 'https://www.instagram.com/xfm_chiangmai/?hl=th';
  public mobileNo : string = '0842229275';
  public songDesc : string;
  public radio : MediaObject;

  date: any;
  daysInThisMonth: any;
  daysInLastMonth: any;
  daysInNextMonth: any;
  monthNames: string[];
  currentMonth: any;
  currentMonthInt: any;
  currentYear: any;
  currentDate: any;
  selectedDateText:string;
  SHOW_DIALOG_EVENT:boolean;
  
  EVENT_DETAILS = [{'topic':'มหกรรมการเงินเชียงใหม่ มหกรรมการเงินเชียงใหม่ ครั้งที่ 13'
                    ,'event_place':'เซ็นทรัลพลาซ่าเชียงใหม่ แอร์พอร์ต'
                    ,'event_start_date':'2018-06-21'
                    ,'event_finish_date':'2018-06-28'
                    ,'event_date_text':'21 - 28 June 2018'
                    ,'event_image_url':'assets/imgs/poster-event.png'
                    ,'event_owner':'xfm'
                    ,'calendar_notify':'Y'
                   }
                    
                   ,{'topic':'มหกรรมการเงินเชียงใหม่ ครั้งที่ 14'
                    ,'event_place':'เซ็นทรัลพลาซ่าเชียงใหม่ แอร์พอร์ต'
                    ,'event_start_date':'2018-06-21'
                    ,'event_finish_date':'2018-06-30'
                    ,'event_date_text':'21 - 30 June 2018'
                    ,'event_image_url':'assets/imgs/poster-event.png'
                    ,'event_owner':'other'
                    ,'calendar_notify':'N'
                   }

                   ,{'topic':'มหกรรมการเงินเชียงใหม่ ครั้งที่ 15'
                    ,'event_place':'เซ็นทรัลเฟสติวัลเชียงใหม่'
                    ,'event_start_date':'2018-07-10'
                    ,'event_finish_date':'2018-07-15'
                    ,'event_date_text':'21 - 30 June 2018'
                    ,'event_image_url':'assets/imgs/poster-event.png'
                    ,'event_owner':'xfm'
                    ,'calendar_notify':'Y'
                   }
                         
                         ];

   SHOW_EVENT_DETAILS = [];
  public SHOW_PAGE:string='HOME';
  public mediaStatus:0;
  public mediaStatusTxt:string;
  public cntLoopPlay = 0;
  public cntLoopPlayTxt:string;
  public errorMsg:string;
  public mediaFile;
  constructor(public navCtrl: NavController
    ,public platform : Platform
    ,private socialSharing: SocialSharing
    ,private iab: InAppBrowser
    ,private media: Media
    ,private http: HTTP
    ,private storage: Storage
    ,private statusBar: StatusBar
    ,private callNumber: CallNumber
    ,private camera: Camera
    ,private transfer: FileTransfer
    ,private file: File
    ,private backgroundMode: BackgroundMode
    ,private appMinimize: AppMinimize
    ,private splashScreen: SplashScreen
    ) {
      

      // console.log(storage.get('media_play'));
      this.splashScreen.show()
      
      this.platform.ready().then(() => { 
        
        this.splashScreen.hide();
        this.statusBar.overlaysWebView(true);
        this.statusBar.show();
        // set status bar to white
        this.statusBar.backgroundColorByHexString('#AB2323');
        console.log('device ready')
        
        this.platform.registerBackButtonAction(() => {
          //sometimes the best thing you can do is not think, not wonder, not imagine, not obsess. 
          //just breathe, and have faith that everything will work out for the best.
          console.log(this.SHOW_PAGE);
          if(this.SHOW_PAGE=='CONTACT'){
            console.log('Back to EVENT');
            this.prepareEventPage()
          }else if(this.SHOW_PAGE=='EVENT'){
            this.SHOW_PAGE = 'HOME';
            console.log('Back to HOME');
          }else{
            this.appMinimize.minimize();
          }
        },1);
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

        this.startPlay();
        this.getSongDesc();
        setInterval(() => this.getSongDesc(), 5000);
        //setInterval(() => this.loopPlayMedia(), 30000);

      })

  }

  swipeEvent(e){
    console.log('Swipe!',e.direction);
    if((e.direction == 2 && this.SHOW_PAGE == 'HOME') || (e.direction == 4 && this.SHOW_PAGE == 'CONTACT')){
      //this.navCtrl.setRoot(this.tab2Root);
      this.prepareEventPage()
    }else if((e.direction == 4 && this.SHOW_PAGE == 'EVENT')){
      this.SHOW_PAGE = 'HOME';
    }else if((e.direction == 2 && this.SHOW_PAGE == 'EVENT')){
      this.SHOW_PAGE = 'CONTACT';
    }
  }

  getSongDesc(){
    if(!this._streamPaused){
      this.http.get(this.descSongHost, {}, {})
      .then(data => {
        this.songDesc = data.data
        let songOnNotification = data.data.replace('<h3>', '').replace('</h4>','');
        songOnNotification = songOnNotification.split('</h3><h4>');
        this.backgroundMode.setDefaults({ title: songOnNotification[0], text: songOnNotification[1]}); 
        // this.backgroundMode.enable();
        
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
    }
  }

  startPlay(){
    
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
    this.radio = this.media.create(this.mediaHost);
    this.radio.play({'playAudioWhenScreenIsLocked':true}); 
    console.log('Press play');
    this.getSongDesc();
    
    this.radio.onStatusUpdate.subscribe(status => this.checkMediaStatus(status));
    this.radio.onSuccess.subscribe(() => this.checkMediaStatus(this.mediaStatus));
    this.radio.onError.subscribe(error => this.checkMediaStatus(this.mediaStatus));
  

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
  }

  stopPlay(){
      
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
  }

  checkMediaStatus(status){
    if(status==1){
      console.log('Media Status : Prepare');
      this.errorMsg = '';
    }else if(status==2){
      console.log('Media Status : Playing');
      this.errorMsg = '';
    }else if(status==3){
      console.log('Media Status : Pause');
      this.errorMsg = '';
    }else if(status==4){
      if(!this._streamPaused){
        
        this.radio.stop();
        this.radio.release();

        this.startPlay();
        this.errorMsg = 'Media Error while playing, Force play';
        console.log(this.errorMsg);

      }else{
        console.log('Media Status : Stop');
        this.stopPlay();
        this.errorMsg = '';
      }
    }else{
      console.log('Other case');
    }
    this.mediaStatus = status;
    this.mediaStatusTxt = this.mediaStatus + ' : ' + (new Date());

  }

  loopPlayMedia(){

    if(!this._streamPaused){
      this.radio.play({'playAudioWhenScreenIsLocked':true}); 
      console.log('Loop play');
      this.backgroundMode.enable();
      this.backgroundMode.on('activate');
      this.cntLoopPlay = this.cntLoopPlay + 1;
      this.cntLoopPlayTxt = this.cntLoopPlay + ' : ' +  (new Date());
      this.radio.onStatusUpdate.subscribe(status => this.checkMediaStatus(status));
      this.radio.onSuccess.subscribe(() => console.log('success'));
      this.radio.onError.subscribe(error => (!this._streamPaused?this.radio.play:this.radio.pause));
    }
    // console.log('this.radio.getDuration() ', this.radio.getDuration());
     
  }
  
  makeCallNumber(){
    this.callNumber.callNumber(this.mobileNo, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  }

   shareViaFacebook(socialNet: string, fab: FabContainer)
   {
       console.log('tab share');
       fab.close();
       console.log("Sharing in", socialNet);
       this.socialSharing.canShareVia('facebook', this.message, null, this.uri)
       .then((data) =>
       {

          this.socialSharing.shareViaFacebook(this.message, null, this.uri)
          .then((data) =>
          {
             console.log('Shared via Facebook');
          })
          .catch((err) =>
          {
             console.log('Was not shared via Facebook');
          });

       })
       .catch((err) =>
       {
          console.log('Not able to be shared via Facebook', err);
       });
     }

   shareViaInstagram(socialNet: string, fab: FabContainer)
   {
         console.log('tab share');
         fab.close();
         console.log("Sharing in", socialNet);
      
         this.socialSharing.canShareVia('instagram', this.message, this.image, this.uri)
         .then((data) =>
         {

            this.socialSharing.shareViaInstagram(this.message, this.image)
            .then((data) =>
            {
               console.log('Shared via instagram');
            })
            .catch((err) =>
            {
               console.log('Was not shared via instagram');
            });

         })
         .catch((err) =>
         {
            console.log('Not able to be shared via instagram', err);
         });

   }

   openFacebook()
   {
     this.iab.create(this.fbUrl,'_blank',{location:'no'});
   }

   openInstagram()
   {
     this.iab.create(this.igUrl,'_blank',{location:'no'});
   }

   goToPage(pages:string) 
   {
    this.navCtrl.push(pages);
  }

  // EVENT FUNCTION #########################################################

  prepareEventPage(){
      this.SHOW_PAGE = 'EVENT';
      console.log('view event');
      this.date = new Date();
      this.monthNames = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
      this.getEventService(this.date);
      
  }

  getDaysOfMonth() {
    this.daysInThisMonth = new Array();
    this.daysInLastMonth = new Array();
    this.daysInNextMonth = new Array();
    this.currentMonth = this.monthNames[this.date.getMonth()];
    this.currentMonthInt = this.date.getMonth() + 1;
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
    this.getEventService(this.date)
    // this.getDaysOfMonth();
  }

  goToNextMonth() {
    console.log('next month');
    this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
    this.getEventService(this.date)
    // this.getDaysOfMonth();
  }

  getEventService(date){
    // console.log(date.toISOString().slice(0, 7));
    date = date.toISOString().slice(0, 7);
    this.http.post( this.webServerHost + '/event_service.php', {'date':date}, {})
    .then(data => {
      this.EVENT_DETAILS = JSON.parse(data.data);
      //console.log(data.status);
      console.log(data.data); // data received by server
      //console.log(data.headers);
      this.getDaysOfMonth();
    })
    .catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
  }

  openDialogEvent(day){
    // console.log(day, this.currentMonthInt, this.currentYear);
    var select_day = day.toString().length == 1?'0' + day : day;
    var select_month = this.currentMonthInt.toString().length == 1?'0' + this.currentMonthInt : this.currentMonthInt;
    var select_date = this.currentYear + '-' + select_month + '-' + select_day;
    this.selectedDateText = day + ' ' + ' ' + this.currentMonth + ' '  + this.currentYear;
    console.log(select_date);

    // filter event on select day
    var loop = this.EVENT_DETAILS.length;
    this.SHOW_EVENT_DETAILS = [];
    for(var i = 0; i < loop; i++){
      var checkDate = new Date(select_date);
      var startDate = new Date(this.EVENT_DETAILS[i].event_start_date);
      var finishDate = new Date(this.EVENT_DETAILS[i].event_finish_date);
      if(checkDate >= startDate && checkDate <= finishDate){
        this.SHOW_EVENT_DETAILS.push(this.EVENT_DETAILS[i]);
      }
    }
    console.log(this.SHOW_EVENT_DETAILS.length);
    this.SHOW_DIALOG_EVENT = true;
  }

  closeDialogEvent(){
    setTimeout(() => this.SHOW_DIALOG_EVENT = false , 100);
     
  }

  checkEventDate(day){
    var select_day = day.toString().length == 1?'0' + day : day;
    var select_month = this.currentMonthInt.toString().length == 1?'0' + this.currentMonthInt : this.currentMonthInt;
    var select_date = this.currentYear + '-' + select_month + '-' + select_day;

    var loop = this.EVENT_DETAILS.length;
    for(var i = 0; i < loop; i++){
      var checkDate = new Date(select_date);
      var startDate = new Date(this.EVENT_DETAILS[i].event_start_date);
      var finishDate = new Date(this.EVENT_DETAILS[i].event_finish_date);
      if(checkDate >= startDate && checkDate <= finishDate && this.EVENT_DETAILS[i].calendar_notify == 'Y'){
        return true;
      }
    }

    return false;
  }

}
