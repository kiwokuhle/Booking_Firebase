import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { User } from '../../app/models/user';
import { RegisterPage } from '../register/register';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private AngFAuth: AngularFireAuth,public alertCtrl: AlertController
    ,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async login(){
    

    try{
     const results = await this.AngFAuth.auth.signInWithEmailAndPassword(this.user.email,this.user.password) .then(()=>{
      let toast = this.toastCtrl.create({
        message: 'User was added successfully',
        duration: 3000,
        position: 'top'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
      this.navCtrl.push(HomePage);
        
    },(Error=>{
      const alert = this.alertCtrl.create({
        title: 'Error! ',
        subTitle: 'email or password is not valid try again',
        buttons: ['OK']
      });
      alert.present();


    }))
  
    console.log(results)
  }catch(e){
    console.error(e);
  

  }


}

  
  register(){
    this.navCtrl.push(RegisterPage);

  }

}
