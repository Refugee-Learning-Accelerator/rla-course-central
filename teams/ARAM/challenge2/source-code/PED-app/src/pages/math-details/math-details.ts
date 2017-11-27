import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-math-details',
  templateUrl: 'math-details.html',
})
export class MathDetailsPage {

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item=this.navParams.get("item");
    console.log('details: ', this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MathDetailsPage');
  }

}
