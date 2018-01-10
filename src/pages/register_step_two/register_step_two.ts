import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-register-step-two',
  templateUrl: 'register_step_two.html',
})
export class RegisterStepTwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
    this.goHome();
  }
  
  goHome(){
    this.navCtrl.push(TabsPage);
  }
}
