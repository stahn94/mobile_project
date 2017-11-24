import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mypage1Page } from '../mypage1/mypage1';
import { ItemupPage } from '../itemup/itemup';
import { ItemlistPage } from '../itemlist/itemlist';
import { LoginPage } from '../login/login';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  GoMypage(){
    this.navCtrl.push(Mypage1Page);
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
