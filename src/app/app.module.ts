import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Mypage1Page } from '../pages/mypage1/mypage1';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages//home/home';
import { SignupPage } from '../pages/signup/signup';
import { ItemupPage } from '../pages/itemup/itemup';
import { ItemlistPage } from '../pages/itemlist/itemlist';
import { ItemdetailPage } from '../pages/itemdetail/itemdetail';
import { ChattingPage } from '../pages/chatting/chatting';
import { UserlistPage } from '../pages/userlist/userlist';
import { UserdetailPage } from '../pages/userdetail/userdetail';
import { MypagePage } from '../pages/mypage/mypage';



import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

const firebaseAuth = {
  apiKey: "AIzaSyBXP8Bkp843Mbei9BzwxTes29ALO9aiEmE",
  authDomain: "test-project-6731a.firebaseapp.com",
  databaseURL: "https://test-project-6731a.firebaseio.com",
  projectId: "test-project-6731a",
  storageBucket: "test-project-6731a.appspot.com",
  messagingSenderId: "330727066803"
};


@NgModule({
  declarations: [
    MyApp,
    Mypage1Page,
    LoginPage,
    HomePage,
    SignupPage,
    ItemupPage,
    ItemlistPage,
    ItemdetailPage,
    ChattingPage,
    UserlistPage,
    UserdetailPage,
    MypagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Mypage1Page,
    LoginPage,
    HomePage,
    SignupPage,
    ItemupPage,
    ItemlistPage,
    ItemdetailPage,
    ChattingPage,
    UserlistPage,
    UserdetailPage,
    MypagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
