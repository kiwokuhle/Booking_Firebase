import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import  {AngularFireAuth} from "angularfire2/auth";
import { User} from '../../app/models/user';


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

  constructor(public navCtrl: NavController, public navParams: NavParams,private AngFAuth:AngularFireAuth,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  


  async register(user:User){
    // if (this.user.password == this.user.confirm) {
    try{
    const results = await this.AngFAuth .auth.createUserWithEmailAndPassword(user.email,user.password) .then(()=>{
      const alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'successfully registered',
});
      alert.present();
      
    },(Error=>{
      const alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'your password or email is invalid please try again',
        buttons: ['OK']
      });
      alert.present();

    }))
    console.log(results)
  }catch(e){
    console.error(e);

   } 
   //}
      
  //  else {
      
  //   }


}
}
