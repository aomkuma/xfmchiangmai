import { Component, NgZone } from '@angular/core';
import {MenuController, Platform} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HTTP } from '@ionic-native/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Storage } from '@ionic/storage';
import { Crop } from '@ionic-native/crop';
import { DatePicker } from '@ionic-native/date-picker';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


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

  public webServerHost : string = 'http://xfmnetwork.com/backoffice/';
  SHOW_REGISTER:boolean;
  SHOW_UPDATE_PROFILE:boolean;
  SHOW_VIEW_PROFILE:boolean;
  text: string;
  myPhoto : any;
  username : any;
  password : any;
  public FB_PROFILE : any;
  public PERSON_PROFILE : {'id':string
                          ,'img_profile':string
                          ,'username':string
                          ,'firstname':string
                          ,'lastname':string
                          ,'birthday':string
                          ,'birthday_show':string
                          ,'mobile':string
                          ,'gender':string
                          ,'register_type':string
                        };

  constructor(public menuCtrl: MenuController
            ,private storage: Storage
            ,private camera: Camera
            ,private transfer: FileTransfer
            ,private file: File
            ,private crop: Crop
            ,private datePicker: DatePicker
            ,private zone: NgZone
            ,private http: HTTP
            ,private fb: Facebook
            ,public platform : Platform
            ) {

    this.SHOW_REGISTER = false;
    this.SHOW_UPDATE_PROFILE = false;
    this.SHOW_VIEW_PROFILE = false;
    // console.log('Hello MenuSidebarComponent Component');
    // this.text = 'Hello World';
    this.PERSON_PROFILE = {'id':''
                          ,'img_profile':''
                          ,'username':''
                          ,'firstname':''
                          ,'lastname':''
                          ,'birthday':''
                          ,'birthday_show':''
                          ,'mobile':''
                          ,'gender':'M'
                          ,'register_type':'NORMAL'
                          }

    // this.storage.remove('PERSON_PROFILE');
    storage.get('PERSON_PROFILE').then((val) => {
      console.log(val);

      if((val != null && val != '')){
        //storage.set('PERSON_PROFILE', );
        console.log('Already session');
        this.PERSON_PROFILE = JSON.parse(val);
      }
    });


    this.platform.registerBackButtonAction(() => {
      //sometimes the best thing you can do is not think, not wonder, not imagine, not obsess. 
      //just breathe, and have faith that everything will work out for the best.
      this.SHOW_REGISTER = false;
      this.SHOW_UPDATE_PROFILE = false;
      this.SHOW_VIEW_PROFILE = false;
    },1);
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

   viewProfile(){
     this.SHOW_VIEW_PROFILE = true;
   }

   back(){
     this.SHOW_VIEW_PROFILE = false;
   }

   loginFacebook() {
    this.fb.login(['email', 'public_profile']).then((response: FacebookLoginResponse) => {
        this.fb.api('me?fields=id,name,email,first_name,last_name,picture.width(300).height(300).as(picture_large)', []).then(profile => {
          this.PERSON_PROFILE.username = profile['email']
          this.PERSON_PROFILE.firstname = profile['first_name']
          this.PERSON_PROFILE.lastname = profile['last_name']
          this.PERSON_PROFILE.img_profile = profile['picture_large']['data']['url']
          this.PERSON_PROFILE.register_type = 'FACEBOOK';
          // Force register

          this.http.post( this.webServerHost + '/account_service.php', {'data':{'ACTION':'ADD', 'USER':this.PERSON_PROFILE}}, {})
            .then(data => {
              var result = JSON.parse(data.data);
              
              if(result.STATUS == 'OK'){
                console.log(result.id);
                if(result.id != null){
                  console.log('first time signin', result.MSG);
                  this.PERSON_PROFILE.id = result.id;  
                }else{
                  console.log('already signin',result.MSG.id);
                  this.PERSON_PROFILE.id = result.MSG.id;  
                }
                
                this.storage.set('PERSON_PROFILE', JSON.stringify(this.PERSON_PROFILE));  
              }else{
                this.PERSON_PROFILE = {'id':'','img_profile':''
                                ,'username':''
                                ,'firstname':''
                                ,'lastname':''
                                ,'birthday':''
                                ,'birthday_show':''
                                ,'mobile':''
                                ,'gender':'M'
                                ,'register_type':'NORMAL'
                                }
                alert(result.MSG);
              }
              
            })
            .catch(error => {

              console.log(error.status);
              console.log(error.error); // error message as string
              console.log(error.headers);

            });
        });
      });
    }

   login(){
     if(this.username == null || this.password == null){
       alert('Username and Password cannot be empty!');
       return false;
     }
     this.http.post( this.webServerHost + '/account_service.php', {'data':{'ACTION':'LOGIN', 'USER':{'username':this.username, 'password':this.password}}}, {})
      .then(data => {
        var result = JSON.parse(data.data);
        if(result.STATUS == 'OK'){
          
          this.storage.set('PERSON_PROFILE', JSON.stringify(result.MSG));
          this.PERSON_PROFILE = result.MSG;  
        }else{
          alert(result.MSG);
        }
      });
   }

   logout(){
     this.storage.remove('PERSON_PROFILE');
     this.PERSON_PROFILE = {'id':'','img_profile':''
                          ,'username':''
                          ,'firstname':''
                          ,'lastname':''
                          ,'birthday':''
                          ,'birthday_show':''
                          ,'mobile':''
                          ,'gender':'M'
                          ,'register_type':'NORMAL'
                          }
     console.log('logout');
   }

   showRegister(){
     console.log('show register page');
     this.SHOW_REGISTER = true;
     this.menuCtrl.close();
   }

   cancelRegister(){
     this.PERSON_PROFILE = {'id':'','img_profile':''
                          ,'username':''
                          ,'firstname':''
                          ,'lastname':''
                          ,'birthday':''
                          ,'birthday_show':''
                          ,'mobile':''
                          ,'gender':'M'
                          ,'register_type':'NORMAL'
                          }
     this.SHOW_REGISTER = false;
   }

   confirmRegister(PERSON_PROFILE){
     if(PERSON_PROFILE.username == '' || PERSON_PROFILE.password == ''){
       alert('Username and Password cannot be empty!');
       return false;
     }
     // console.log('res', JSON.stringify(PERSON_PROFILE));
     this.http.post( this.webServerHost + '/account_service.php', {'data':{'ACTION':'ADD', 'USER':PERSON_PROFILE}}, {})
      .then(data => {
        var result = JSON.parse(data.data);
        //console.log(data.status);
        console.log(result); // data received by server
        if(result.STATUS == 'OK'){
          this.storage.set('PERSON_PROFILE', JSON.stringify(PERSON_PROFILE));  
        }else{
          this.PERSON_PROFILE = {'id':'','img_profile':''
                          ,'username':''
                          ,'firstname':''
                          ,'lastname':''
                          ,'birthday':''
                          ,'birthday_show':''
                          ,'mobile':''
                          ,'gender':'M'
                          ,'register_type':'NORMAL'
                          }
          alert(result.MSG);
        }
        
      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
      
      
     this.SHOW_REGISTER = false; 
   }

   updateProfile(){
     this.SHOW_UPDATE_PROFILE = true;
   }

   confirmUpdate(PERSON_PROFILE){
     // console.log('res', JSON.stringify(PERSON_PROFILE));
     this.http.post( this.webServerHost + '/account_service.php', {'data':{'ACTION':'UPDATE', 'USER':PERSON_PROFILE}}, {})
      .then(data => {
        var result = JSON.parse(data.data);
        //console.log(data.status);
        console.log(result); // data received by server
        if(result.STATUS == 'OK'){
          this.storage.set('PERSON_PROFILE', JSON.stringify(PERSON_PROFILE));  
        }else{
          this.PERSON_PROFILE = {'id':'','img_profile':''
                          ,'username':''
                          ,'firstname':''
                          ,'lastname':''
                          ,'birthday':''
                          ,'birthday_show':''
                          ,'mobile':''
                          ,'gender':'M'
                          ,'register_type':'NORMAL'
                          }
          alert(result.MSG);
        }
      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
      
      
     this.SHOW_UPDATE_PROFILE = false; 
   }

   cancelUpdate(){
     this.SHOW_UPDATE_PROFILE = false;
   }

   chooseBirthday(){
     this.datePicker.show({
        date: new Date(),
        mode: 'date',
        androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
      }).then(
        date => this.setBirthdaySelected(date),
        err => console.log('Error occurred while getting date: ', err)
      );
   }

   setBirthdaySelected(date){
      var month = date.getMonth() + 1;
      var select_month = month.toString().length == 1?'0' + month : month;
      var select_date = date.getDate().toString().length == 1?'0' + date.getDate() : date.getDate();
      var selectedDateText = date.getFullYear() + '-' + select_month + '-'  + select_date;
      this.PERSON_PROFILE.birthday = selectedDateText;//date.toISOString().slice(0, 10); 
      this.PERSON_PROFILE.birthday_show = date.toLocaleDateString('en-GB');
      console.log(this.PERSON_PROFILE.birthday, this.PERSON_PROFILE.birthday_show);
   }

   choosePhoto(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType:0,
      allowEdit:true,
      targetWidth:300,
      targetHeight:300
    }

    this.camera.getPicture(options).then((imageData) => {
      
      this.myPhoto = 'data:image/jpeg;base64,' //+ imageData;
      // this.webServerHost = 'http://192.168.1.4/xfm_backoffice/';
      //  console.log(this.webServerHost + '/account_service.php');
      console.log(this.myPhoto);
      this.http.post( this.webServerHost + '/account_service.php', {'data':{'ACTION':'UPLOAD_PROFILE_PICTURE', 'id':this.PERSON_PROFILE.id, 'base64encodeImage':this.myPhoto}}, {})
      .then(data => {
        var result = JSON.parse(data.data);
        //console.log(data.status);
        console.log(result); // data received by server
        if(result.STATUS == 'OK'){
          this.PERSON_PROFILE.img_profile = this.myPhoto;
          this.storage.set('PERSON_PROFILE', JSON.stringify(this.PERSON_PROFILE));  
        }else{
          
          alert(result.MSG);
        }
        
      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
      
    }, (err) => {
      // Handle error
    });
 }
}
