import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// new import
import { RegisterPage } from '../register/register';
import { PassresetPage } from '../passreset/passreset';
@IonicPage()
@Component({
  selector: 'page-sign',
  templateUrl: 'sign.html',
})
export class SignPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }

  forgetPassword(){
    this.navCtrl.push(PassresetPage);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignPage');
  }

}
