import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages//home/home';

import { Mypage1Page } from '../pages/mypage1/mypage1';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ItemupPage } from '../pages/itemup/itemup';
import { ItemlistPage } from '../pages/itemlist/itemlist';
import { ItemdetailPage } from '../pages/itemdetail/itemdetail';
import { ChattingPage } from '../pages/chatting/chatting';
import { UserlistPage } from '../pages/userlist/userlist';
import { UserdetailPage } from '../pages/userdetail/userdetail';
import { MypagePage } from '../pages/mypage/mypage';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

