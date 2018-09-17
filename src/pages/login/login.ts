import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController,  } from 'ionic-angular';
import { User } from '../../app/models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { DisplayPage } from '../display/display';
import { Provider } from '../../providers/provider/provider';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user= {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: Provider,
    public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(){
    
this.auth.logIn(this.user.email, this.user.password).then(data =>{
  const loader = this.loadingCtrl.create({
          content: "Please wait...",
          duration: 500
        });
        loader.present();
        this.navCtrl.push(HomePage);
}, Error =>{
  alert(Error);
})

}

  
  register(){
    this.navCtrl.push(RegisterPage);

  }
  home(){
    this.navCtrl.push(HomePage)
  }

  
  forgetPassword=function(user:User) {
           this.auth.resetPassword(this.user.email).then(()=>{

            const alert = this.alertCtrl.create({
              title: 'CONFIRMATION',
              subTitle:  "Please check your Email",
              buttons: ['OK']
            });
            alert.present();
            
           } , (error)=>{

            const alert = this.alertCtrl.create({
              title: 'CONFIRMATION',
              subTitle:  error.message,
              buttons: ['OK']
            });
            alert.present();

           })
 
 
          }
        
   
  

}


