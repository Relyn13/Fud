import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterUser } from '../../models/register/register.interface';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as RegisterUser

  userRef$: AngularFireList<RegisterUser[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
  	this.userRef$ = this.database.list('users');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(user: RegisterUser) {
  	// console.log(user);
  	// create an object and
  	// convert string into number
  	// this.shoppingItemRef$.push({
  	//  itemName: this.shoppingItem.itemName,
  	// 	itemNumber: Number(this.shoppingItem.itemNumber)
  	// });
  	this.userRef$.push({
  		userName: this.user.name
  	});
  }

}
