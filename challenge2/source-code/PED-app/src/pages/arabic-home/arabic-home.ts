import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-arabic-home',
  templateUrl: 'arabic-home.html',
})
export class ArabicHomePage {

  category:string="اختر تخصصاً";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArabicHomePage');
  }


  showDetails(){
    console.log(this.category);
    if(this.category=="math"){
      console.log(this.category);
    }
  }

}
