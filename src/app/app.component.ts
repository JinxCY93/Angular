import { Component } from '@angular/core'
import { Timeouts } from 'selenium-webdriver';
import { timeout } from 'q';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  times = 0;
  visible = false;
  price1 = 0;
  price2 = 0;
  itemtotalprice = 0;

  // clearcart testing purpose
  testingitem: object = {
    'clear cart testing': true,
  }

  carttesting = Object.keys(this.testingitem)
  // clearcart testing purpose

  quantitycountadd() {
    this.times++
  }
  quantitycountminus() {
    if (this.times <= 0) {
      return 0
    } else {
      this.times--
    }
  }

  togglecartdiv() {
    this.visible = !this.visible;
  }

  totalprice() {
    this.itemtotalprice = this.price1 * this.times;
  }

  clearcart() {
    this.testingitem = {}
    this.carttesting = []
  }

}