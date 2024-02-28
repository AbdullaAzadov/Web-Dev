import {Component, Input} from '@angular/core';
import { allProducts } from '../all-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})

export class ProductListComponent {
  @Input() targetCategory: string | undefined;
  product: any[];

  constructor() {
    this.product = allProducts.filter(allProducts => allProducts.category == this.targetCategory);
  }

  updateCategory(newCategory: string){
    this.product = allProducts.filter(allProducts => allProducts.category == newCategory);
  }

}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
