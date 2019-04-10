import { Component, SystemJsNgModuleLoader } from '@angular/core'
import { createWriteStream } from 'fs';
import { INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic/src/platform_providers';

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
  id: string;

  systems: object = [
    {
      system: 'Dell XPS 15',
      processor: 'i7-7960K',
      ram: '16GB',
      hdd: '256GB M2 SSD + 1TB HDD 5400rpm',
      display: '15.6 Adobe RGB Display',
      imagepath: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/xps_notebooks/xps_15_9570/spi/ng/notebook-xps-15-9570-bestof-500-ng.psd?fmt=png-alpha',
      price: 5500,
      quantity: 0,
    },
    {
      system: 'Dell Inspiron 5000',
      processor: 'i5-7960K',
      ram: '8GB',
      hdd: '128GB M2 SSD + 500GB HDD 5400rpm',
      display: '15.6 Anti-Glare Display',
      imagepath: 'https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/15_5584/global_spi/spi_inspiron_15_5584_1sp_silver/ng/notebook-inspiron-15-5584-1sp-silver-bestof-500-ng.psd?fmt=jpg',
      price: 3500,
      quantity: 0,
    }
  ]

  // clearcart testing purpose
  testingitem: object = {
    'clear cart testing': true,
  }

  carttesting = Object.keys(this.testingitem)
  // clearcart testing purpose

  quantitycountadd(systems) {
    systems.quantity++
  }

  quantitycountminus(systems) {
    if (systems.quantity <= 0) {
      return 0
    } else {
      systems.quantity--
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