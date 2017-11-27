import { MathArDetailsPage } from '../math-ar-details/math-ar-details';
import { MathDetailsPage } from '../math-details/math-details';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-math-ar',
  templateUrl: 'math-ar.html',
})
export class MathArPage {

  items = ["التكامل","المشتقة", "جيب الزاوية (جا)", "جيب تمام الزاوية (جتا)", "ظل الزاوية (ظا)"];

  integral: any = { head:"التكامل" ,trans:"Integral", defi:"In mathematics, an integral assigns numbers to functions in a way that can describe displacement, area, volume, and other concepts that arise by combining infinitesimal ", photo: "Integral.PNG", ex: "Integral exampleEn.PNG", more: "http://tutorial.math.lamar.edu/Classes/CalcI/ComputingDefiniteIntegrals.aspx" };

  deriv: any = { head:"المشتقة" ,trans:"Derivative", defi:"The derivative of a function of a real variable measures the sensitivity to change of the function value (output value) with respect to a change in its argument (input value). ", photo: "Derivative.PNG", ex: "DerivativeExampleEn.PNG", more: "http://tutorial.math.lamar.edu/Classes/CalcI/DefnOfDerivative.aspx" };

  sin: any = { head:"جيب الزاوية (جا)" ,trans:"Sine", defi:"The sine of an angle is the ratio of the length of the opposite side to the length of the hypotenuse. The word comes from the Latin sinus for gulf or bay,[3] since, given a unit ", photo: "consine.PNG", ex: "Circle_cos_sin.gif", more: "https://en.wikipedia.org/wiki/Sine" };

  cos: any = { head:"جيب تمام الزاوية (جتا)" ,trans:"Cosine", defi:"The cosine (sine complement, Latin: cosinus, sinus complementi) of an angle is the ratio of the length of the adjacent side to the length of the hypotenuse, so called because ", photo: "consine.PNG", ex: "Circle_cos_sin.gif", more: "https://en.wikipedia.org/wiki/Trigonometric_functions" };

  tan: any = { head:"ظل الزاوية (ظا)" ,trans:"Tan", defi:"The tangent of an angle is the ratio of the length of the opposite side to the length of the adjacent side: so called because it can be represented as a line segment tangent to ", photo: "consine.PNG", ex: "tangent.jpg", more: "https://en.wikipedia.org/wiki/Trigonometric_functions" };

  // sin: any = { head: "جيب الزاوية (جا)",trans:"", defi: "This is the Sine", photo: "PEDlogo.png", ex: "This is a Sine example" };
  // cos: any = { head: "جيب تمام الزاوية (جتا)", defi: "This is the Cosine", photo: "PEDlogo.png", ex: "This is a Cosine example" };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MathArPage');
  }


  itemSelected(item: any) {
    console.log(item);

    switch (item) {
      case "جيب الزاوية (جا)":
        this.navCtrl.push(MathArDetailsPage, { item: this.sin });
        break;
      case "جيب تمام الزاوية (جتا)":
        this.navCtrl.push(MathArDetailsPage, { item: this.cos });
        break;
      case "التكامل":
        this.navCtrl.push(MathArDetailsPage, { item: this.integral });
        break;
      case "المشتقة":
        this.navCtrl.push(MathArDetailsPage, { item: this.deriv });
        break;
        case "ظل الزاوية (ظا)":
        this.navCtrl.push(MathArDetailsPage, { item: this.tan });
        break;

      default:
        this.navCtrl.push(MathArDetailsPage, { item: this.cos });
        break;
    }
  }

}
