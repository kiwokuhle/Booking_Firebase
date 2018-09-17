import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import  {AngularFireAuth} from "angularfire2/auth";
import { User} from '../../app/models/user';
import {LoginPage} from '../../pages/login/login';
import {Provider} from '../../providers/provider/provider';
import { HomePage } from '../home/home';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user= {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams,private auth: Provider,public alertCtrl: AlertController,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  async register(user:User){
    this.auth.register(this.user.email,this.user.password).then(data =>{
      let toast = this.toastCtrl.create({
        message: 'User was added successfully now login ',
        duration: 4000,
        position: 'middle'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
      this.navCtrl.push(LoginPage)

    },Error =>{
      alert(Error);
    })

}
login=function(){
  this.navCtrl.push(LoginPage)
}
}
