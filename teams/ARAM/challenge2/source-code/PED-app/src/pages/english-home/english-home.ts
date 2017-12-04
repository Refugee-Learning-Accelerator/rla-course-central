import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-english-home',
  templateUrl: 'english-home.html',
})
export class EnglishHomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnglishHomePage');
  }

}
