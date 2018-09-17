
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

/*
  Generated class for the Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Provider {
  // private user:firebase.User;
userID;



  constructor(public afAuth:AngularFireAuth) {
    afAuth.authState.subscribe(user =>{
      this.userID = user.uid;
    });
  }

  logIn(email,password){
    return new Promise ((accpt,rej) =>{
      this.afAuth.auth.signInWithEmailAndPassword(email,password).then(()=>{
        this.afAuth.authState.subscribe(data =>{
          this.userID = data.uid;
        })
        accpt();
      }, Error =>{
        rej(Error.message)
      })
    })

  }
  register(email,password){
    return new Promise ((accpt,rej)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,password).then(()=>{
         this.afAuth.authState.subscribe(data =>{
           this.userID =data.uid;

      })
      accpt();
      }),Error=>{
        rej(Error.message)
      }
     
    })

  }
  resetPassword(email: string) {
    return new Promise ((accpt,rej)=>{
      this.afAuth.auth.sendPasswordResetEmail(email).then(()=>{
        this.afAuth.authState.subscribe(data =>{
          this.userID =data.uid;
        })
           
      }),Error=>{
      rej(Error.message)
    }
     
    })
    .catch((error) => console.log(error))
  }

  logout() {
    return new Promise ((accpt,rej)=>{
      this.afAuth.auth.signOut().then(()=>{
        this.afAuth.authState.subscribe(data=>{
          this.userID=data.uid;
        }) 
        accpt();

      }),Error=>{
        rej(Error.message)
      }
     
    })
    }
  }



