import {Component, Input} from '@angular/core';

import { allProducts } from '../all-products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() Product!: any[]

  share(product_link: string) {
    let link = 'https://telegram.me/share/url?url=';
    link += product_link;
    window.location.href = link;
  }
}
