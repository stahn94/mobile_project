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
    UserdetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    UserdetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
