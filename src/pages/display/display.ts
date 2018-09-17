import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home';
import { BookPage } from '../book/book';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {

  obj = this.navParams.get('obj');
  arr:any []= this.navParams.get('jj');
  image=this.arr[this.obj].image;
  hotelName=this.arr[this.obj].hotelName;
  description=this.arr[this.obj].description;
  price=this.arr[this.obj].price;
  address=this.arr[this.obj].address;
pet ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet="Review";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }


back(){
  this.navCtrl.pop()
}

book=function(){
  this.navCtrl.push(BookPage ,{image:this.image,address:this.address,hotelName:this.hotelName,price:this.price} );
}

}

var Arr = [];
export default Array

