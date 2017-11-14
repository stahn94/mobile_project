import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemdetailPage } from '../itemdetail/itemdetail';

/**
 * Generated class for the ItemlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itemlist',
  templateUrl: 'itemlist.html',
})
export class ItemlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemlistPage');
  }
  GoItemdetailPage(){
    this.navCtrl.push(ItemdetailPage);
  }
}
