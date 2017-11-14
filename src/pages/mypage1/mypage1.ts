import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChattingPage } from '../chatting/chatting';
import { UserlistPage } from '../userlist/userlist';
import { ItemdetailPage } from '../itemdetail/itemdetail';

/**
 * Generated class for the Mypage1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mypage1',
  templateUrl: 'mypage1.html',
})
export class Mypage1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mypage1Page');
  }
  GoChattingPage(){
    this.navCtrl.push(ChattingPage);
  }

  GoUserlistPage(){
    this.navCtrl.push(UserlistPage);
  }
  GoItemdetailPage(){
    this.navCtrl.push(ItemdetailPage);
  }

}
