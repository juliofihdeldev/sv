import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular/components/nav/nav';

// new import
import { PassresetmessagePage } from '../passresetmessage/passresetmessage';


@IonicPage()
@Component({
  selector: 'page-passreset',
  templateUrl: 'passreset.html',
})
export class PassresetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.goMessage();
  }

  goMessage(){
    this.navCtrl.push(PassresetmessagePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PassresetPage');
  }

}
