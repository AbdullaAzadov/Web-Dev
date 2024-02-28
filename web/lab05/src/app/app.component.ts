import { Component, ViewChild } from '@angular/core';
import { ProductListComponent} from "./product-list/product-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  @ViewChild(ProductListComponent) ProductList!: ProductListComponent
  selectedCategory= '';
  bckClr1 = '#1976d2';
  bckClr2 = '#1976d2';
  bckClr3 = '#1976d2';
  bckClr4 = '#1976d2';

  updateProductList(){
    this.ProductList.updateCategory(this.selectedCategory);
  }
  onOptionChange(option: string) {
    this.bckClr1 = '#1976d2';
    this.bckClr2 = '#1976d2';
    this.bckClr3 = '#1976d2';
    this.bckClr4 = '#1976d2';
    this.selectedCategory = option;

    switch (option) {
      case 'Phone':
        this.bckClr1 = '#092C50FF';
        break;
      case 'Laptop':
        this.bckClr2 = '#092C50FF';
        break;
      case 'Pc':
        this.bckClr3 = '#092C50FF';
        break;
      case 'Monitor':
        this.bckClr4 = '#092C50FF';
        break;
    }
    this.updateProductList()
  }
}

