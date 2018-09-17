import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BookPage} from '../book/book';
import {Provider} from '../../providers/provider/provider';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';







 
/**
 * Generated class for the RetrivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-retrive',
  templateUrl: 'retrive.html',
})
export class RetrivePage {  
  User: any;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase,public afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe(User =>{
    this.itemsRef = database.list('User/'+ User.uid+ '/'+ 'Bookings');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RetrivePage');
  }
  deleteItem(key) {    
    this.itemsRef.remove(key); 
  }
  // updateItem(key: string, newText: string) {
  //   this.itemsRef.update(key, { text: newText });
  // }

}
