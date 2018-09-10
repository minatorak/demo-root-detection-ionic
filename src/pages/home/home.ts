import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var IRoot:any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
   console.log(`IRoot is ${ typeof IRoot}`)
   IRoot.isRootedRedBeerWithoutBusyBox((booleanVal) => {
    console.log('IRoot.isRooted success: ', booleanVal);
  }, (err) => {
    console.log('IRoot.isRooted error:', err);
  });
  }

}
