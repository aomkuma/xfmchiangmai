import { Component,/* AfterViewInit */ } from '@angular/core';
import { NavController, Platform, FabContainer } from 'ionic-angular';
import { Genre } from '../../app/globals/genre';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";
import { genres } from '../../app/globals/constants';
import { Station } from '../../app/globals/station';
import { MediaStreamServiceProvider, stream_meta } from '../../providers/media-stream-service/media-stream-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SMS } from '@ionic-native/sms';
import { Media, MediaObject } from '@ionic-native/media';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  _genre:Genre
  _stations:Station[]
  _activeStation:Station
  _meta:stream_meta
  _streamPaused:boolean
  public genres:Observable<Genre[]>
  public sendTo   : any;
  public subject  : string = 'XFM 94.5 ยิ่งฟังยิ่งใช่ คนเชียงใหม่ฟังเยอะ';
  public message  : string = 'พร้อมให้บริการฟังเพลงผ่าน Application บนมือถือทั้ง iOS และ Android แล้ววันนี้';
  public image    : string  = 'http://xfmnetwork.com/public/images/soon.png';
  public uri      : string  = 'http://xfmnetwork.com/home';
  public fbUrl : string = 'https://www.facebook.com/xfmnetwork/';
  public igUrl : string = 'https://www.instagram.com/xfm_chiangmai/?hl=th';
  public smsMobileNo : string = '0842229275';
  public songDesc : string;
  public radio : MediaObject
  constructor(public navCtrl: NavController
    ,public platform : Platform
    ,private mediaStreamClient:MediaStreamServiceProvider
    ,private socialSharing: SocialSharing
    ,private iab: InAppBrowser
    ,private sms: SMS
    ,private media: Media
    ,private http: HTTP
    ) {

      this.platform.ready().then(() => { 
        console.log('device ready')
        this._streamPaused = true
        this.manageAudio()
        this.getSongDesc()
      })
      // file.release();
  }

  // ngAfterViewInit(){
  //   // this.genres =  Observable.of(genres)
  //   // console.log(genres[0]);
  //   // this.browseGenre(genres[0])
  //   // const file: MediaObject = this.media.create('http://stream.xfmnetwork.com:8613/;stream.mp3');

  //   //   // to listen to plugin events:
  //   //   console.log(file)
  //   //   // play the file
  //   //   file.play();
  //   this._streamPaused = true
  //   this.manageAudio()
  // }

  getSongDesc(){
    this.http.get('http://plaza.xfmnetwork.com/db/nowplaying.txt', {}, {})
    .then(data => {
      // this.songDesc = data.data.replace('</h3><h4>', '</h3><br><h4>');
      // this.songDesc = data.data.replace('</h3><h4>', "</span><br><span style='font-size:1em;'>");
      // this.songDesc = this.songDesc.replace('<h3>', "<span style='font-size:2em; font-weight:bolder;'>");
      // this.songDesc = this.songDesc.replace('</h4>', '</span>');
      this.songDesc = data.data
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

    })
    .catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
  }

  manageAudio() { 
    if(this._streamPaused){
      this.radio = this.media.create('http://stream.xfmnetwork.com:8613/;stream.mp3');
      if(this.radio){
        console.log(this.radio)
        // this.radio.onSuccess.subscribe(() => console.log('Action is successful'));
      
        this._streamPaused = false;
        this.radio.play();
        console.log('play');

        setInterval(() => this.getSongDesc(), 5000);
      }
      
    }else{
      this._streamPaused = true;
      this.radio.stop();
      console.log('pause');
      this.radio.release();
    }
  }

  stopAudio() { 
  const radio: MediaObject = this.media.create('http://stream.xfmnetwork.com:8613/;stream.mp3');
  radio.stop();
  console.log('pause');
  }

  browseGenre(genre:Genre){
    //this.navCtrl.push("GenreBrowserPage",genre,{direction:'top',updateUrl:false})
    // console.log(genre);
    let station = genre.getStations()
    this.streamStation(station[0])
  }

  playPause(){
    if(this._streamPaused){
      this._streamPaused = false;
      this.mediaStreamClient.resumeStream()
      // this.stopAudio()
    }else{
      this._streamPaused = true;
      this.mediaStreamClient.pauseStream()
      // this.playAudio()
    }
  }
  
  streamStation(station:Station){
     
     if(this.isSelectedStation(station.getID())){
       console.log('Is selected');
        if(this._streamPaused != true){
          this._streamPaused = true;
          this.mediaStreamClient.pauseStream()
        }else{
          this._streamPaused = false;
          this.mediaStreamClient.resumeStream()
        }
     }else{
       console.log('Is change');
       this._streamPaused = false;
       this._activeStation = station
       this.mediaStreamClient.changeStreamSource(station)
     }
     console.log(this._streamPaused);
  }



   isSelectedStation(id:string):boolean{
    return this._activeStation != null ? this._activeStation.getID() == id : false
    }

   setStreamMetaImage(image){
    if(image)
    return {
      'background-image':"url('"+image+"')"
    }
  }

   shareViaFacebook(socialNet: string, fab: FabContainer)
   {
     console.log('tab share');
     fab.close();
     console.log("Sharing in", socialNet);
      // this.platform.ready()
      // .then(() =>
      // {
      //    this.socialSharing.canShareVia('com.apple.social.facebook', this.message, this.image, this.uri)
      //    .then((data) =>
      //    {

      //       this.socialSharing.shareViaFacebook(this.message, this.image, this.uri)
      //       .then((data) =>
      //       {
      //          console.log('Shared via Facebook');
      //       })
      //       .catch((err) =>
      //       {
      //          console.log('Was not shared via Facebook');
      //       });

      //    })
      //    .catch((err) =>
      //    {
      //       console.log('Not able to be shared via Facebook', err);
      //    });

      // });
     }

     shareViaInstagram(socialNet: string, fab: FabContainer)
     {
       console.log('tab share');
       fab.close();
       console.log("Sharing in", socialNet);
      // this.platform.ready()
      // .then(() =>
      // {
      //    this.socialSharing.canShareVia('com.apple.social.facebook', this.message, this.image, this.uri)
      //    .then((data) =>
      //    {

      //       this.socialSharing.shareViaFacebook(this.message, this.image, this.uri)
      //       .then((data) =>
      //       {
      //          console.log('Shared via Facebook');
      //       })
      //       .catch((err) =>
      //       {
      //          console.log('Was not shared via Facebook');
      //       });

      //    })
      //    .catch((err) =>
      //    {
      //       console.log('Not able to be shared via Facebook', err);
      //    });

      // });
     }

   sendSMS(msg:string){
     this.sms.send(this.smsMobileNo, msg);
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
}
