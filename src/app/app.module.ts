import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireAuthModule } from 'angularfire2/auth';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { FireBase_Config } from './config';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DisplayPage } from '../pages/display/display';
import { BookPage} from '../pages/book/book';
import { Provider } from '../providers/provider/provider';
import { RetrivePage} from '../pages/retrive/retrive';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DisplayPage,
    BookPage,
    RetrivePage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FireBase_Config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DisplayPage,
    BookPage,
    RetrivePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Provider
  ]
})
export class AppModule {}
