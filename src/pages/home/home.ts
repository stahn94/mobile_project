import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mypage1Page } from '../mypage1/mypage1';
import { ItemupPage } from '../itemup/itemup';
import { ItemlistPage } from '../itemlist/itemlist';
import { LoginPage } from '../login/login';
import { MypagePage } from '../mypage/mypage';

import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  email: string;
  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.email = fire.auth.currentUser.email;
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  GoMypage(){
    if(this.email == "root@root.com"){
      this.navCtrl.push(Mypage1Page);
    }
    else{
      this.navCtrl.push(MypagePage);
    }
  }
  GoItemupPage(){
    this.navCtrl.push(ItemupPage);
  }
  GoItemlistPage(){
    this.navCtrl.push(ItemlistPage);
  }
  Gologinpage(){
    this.navCtrl.push(LoginPage);
  }
}
