import { Component, OnInit } from '@angular/core';
import { ProductService } from './productservice';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  products: any[] = [];
  cols: any[];
  log: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));

    this.cols = [
      { field: 'order', header: 'Order' },
      { field: 'label', header: 'Name' },
      { field: 'bookType', header: 'BookType' },
    ];
  }

  onRowReorder(event) {
    this.products = this.products.map((item, index) => {
      return { ...item, data: { ...item.data, order: index + 1 } };
    });
  }
  sendDataToAPi() {
    this.products.map((item, index) => {
      return (item.order = index + 1);
    });
  }
}
