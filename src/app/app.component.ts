import { Component } from '@angular/core';
import { ProductService }        from './products.service'
import { Product }        from './product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  title = 'My Store!';
  products: Product[];
  selectedProduct: Product;

  constructor(private productService:  ProductService) { 
    this.products = productService.getHeroes();
    this.selectedProduct = this.products[0];
  }
}
