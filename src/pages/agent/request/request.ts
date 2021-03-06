import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {
  request: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.request = this.navParams.get('item');
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestPage');
  }

  acceptRequest(){
    this.viewCtrl.dismiss({accept: true});
  }

  closeRequest(){
    this.viewCtrl.dismiss({accept: false});
  }

}
