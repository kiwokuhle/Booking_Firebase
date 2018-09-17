import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingRecord} from '../../modals/add-booking.interface';
import { FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Provider} from '../../providers/provider/provider'
import { AngularFireAuth } from 'angularfire2/auth';
import {HomePage} from '../../pages/home/home';
import { DisplayPage} from '../display/display'
import { LoginPage } from '../login/login';
import { RetrivePage } from '../retrive/retrive';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {

  User: any;
  Booking={} as BookingRecord;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  Push_data;
  image = this.navParams.get("image");
  address=this.navParams.get("address");
  hotelName=this.navParams.get("hotelName");
  price=this.navParams.get("price");
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase,public afAuth:AngularFireAuth) {

    this.afAuth.authState.subscribe(User =>{
      this. Push_data = database.list('User/'+ User.uid+ '/'+ 'Bookings');
    this.itemsRef = database.list('User/'+ User.uid+ '/'+ 'Bookings');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
})
    this.Booking.price=this.price;
    this.Booking.hotelName=this.hotelName;
    this.Booking.address=this.address;


  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }
  back(){
    this.navCtrl.pop()
  }

  AddBooking(Booking:BookingRecord){
    this. Push_data.push(this.Booking );
    console.log(Booking);
    this.navCtrl.push(RetrivePage)
    
  }

}
