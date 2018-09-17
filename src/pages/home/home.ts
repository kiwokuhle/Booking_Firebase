import { Component } from '@angular/core';
import { NavController,Modal, ModalController, Img, Icon, AlertController } from 'ionic-angular';
import { DisplayPage } from '../display/display';
import { Provider} from '../../providers/provider/provider';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  arry = [
  new hotello("../../assets/imgs/hotello1.jpg","R 584","Hotello Southgate",
  "Hotello Southgate has 58 budget hotel rooms with an extra length queen sized and separate bunk bed is ideal for adults or kids sharing."
  ,"Cnr. Columbine and Rifle Range Street, Southgate, Johannesburg, Gauteng"),
  new hotello("../../assets/imgs/hotello2.jpg","R 567",
  "Hotello Berea","Hotello Berea has 69 hotel rooms with an extra length queen sized and separate bunk bed is ideal for adults or kids sharing.","1 Mitchell Street, Berea, Gauteng"),
  new hotello("../../assets/imgs/hotello3.jpg","R 594","Hotello Wynberg",
  "Hotello Midrand has 94 hotel rooms with an extra length queen sized and separate bunk bed is ideal for adults or kids sharing.","Cnr Wanderers & Wolmarans Streets, Johannesburg, Gauteng"),
  new hotello("../../assets/imgs/hotello4.jpg","R 595","Park Station Inn",
  "Accommodation at Hotello Wynberg in Sandton consists of 87 budget hotel rooms with an extra length queen sized and separate bunk bed is ideal for adults or kids sharing. ","1 Maree Street Bramley Park, Sandton, 2090, South Africa"),
  new hotello("../../assets/imgs/hotello5.jpg","R 559","Hotello O.R. Tambo International Airport",
  "Hotello O.R. Tambo has 78 hotel rooms with an extra length queen sized and separate bunk bed is ideal for adults or kids sharing.","Cnr. Herman and Kruin Streets, Germiston, Gauteng"),
  new hotello("../../assets/imgs/hotello6.jpg","R 595","Hotello Edenvale",
  "Hotello Edenvale has 76 hotel rooms with an extra length queen sized and separate bunk bed is ideal for adults or kids sharing.","103 Boeing Road East, Edenvale, Gauteng"),
  new hotello("../../assets/imgs/hotello7.jpg","R 600","Hotello Pretoria",
  "Hotello Pretoria has 135 hotel rooms with an extra length queen sized and separate bunk bed is ideal for adults or kids sharing.","81-85 Pretorius Street, Pretoria, Gauteng"),
  new hotello("../../assets/imgs/hotello8.jpeg","R 600","Hotello Vereeniging",
  "Hotello Vereeniging has 41 budget hotel rooms with an extra length queen sized and separate bunk bed is ideal for adults or kids sharing.","Cnr. Beethoven and Voortrekker Street, Vereeniging, Gauteng"),
  new hotello("../../assets/imgs/hotello9.jpg","R 550","Hotello Benoni",
  "The Hotello Benoni hotel has 56 rooms with an extra length queen sized and separate bunk bed is ideal for adults or kids sharing.","Cnr. Bunyan and Mowbray Avenue, Benoni, Gauteng"),
  new hotello("../../assets/imgs/hotell010.jpg","R 595","Hotello Midrand",
  "Hotello Midrand has 94 hotel rooms with an extra length queen sized and separate bunk bed is ideal for adults or kids sharing.","Cnr. Old Pretoria Road and K101 Street, Midrand, Johannesburg, Gauteng")
]



  constructor(public navCtrl: NavController,public modalCtrl:ModalController,public alertCtrl: AlertController,public afAuth:AngularFireAuth,private auth: Provider) {


   }
  
 // doCheckbox() {
  //   let alert = this.alertCtrl.create();
  //   alert.setTitle('Which planets have you visited?');

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Alderaan',
  //     value: 'value1',
  //     checked: true
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Bespin',
  //     value: 'value2'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Coruscant',
  //     value: 'value3'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Endor',
  //     value: 'value4'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Hoth',
  //     value: 'value5'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Jakku',
  //     value: 'value6'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Naboo',
  //     value: 'value6'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Takodana',
  //     value: 'value6'
  //   });

  //   alert.addInput({
  //     type: 'checkbox',
  //     label: 'Tatooine',
  //     value: 'value6'
  //   });

  //   alert.addButton('Cancel');
  //   alert.addButton({
  //     text: 'Okay',
  //     handler: data => {
  //       console.log('Checkbox data:', data);
  //       this.testCheckboxOpen = false;
  //       this.testCheckboxResult = data;
  //     }
  //   });
  //   alert.present().then(() => {
  //     this.testCheckboxOpen = true;
  //   });
  // }

  presentModal(a) {
    this.navCtrl.push(DisplayPage, {obj:a , jj:this.arry});
    console.log()
  }
  logout() {
    this.afAuth.auth.signOut().then(()=>{
      // this.navCtrl.setRoot(LoginPage);
    })
  }
  b

}
export class hotello{
  image;
  price;
  hotelName;
  description;
  address;

  constructor(image,price,hotelName,description,address){
    this.image=image;
    this.price=price;
    this.hotelName=hotelName;
    this.description=description;
    this.address=address;
  }


} 
