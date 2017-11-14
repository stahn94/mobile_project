import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Mypage1Page } from '../mypage1/mypage1';

/**
 * Generated class for the ItemupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itemup',
  templateUrl: 'itemup.html',
})
export class ItemupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemupPage');
  }
  GoMypage(){
    this.navCtrl.pop();
  }
}
