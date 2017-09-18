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
    this.products = this.productService.getProducts();
    this.selectedProduct = this.products[0];
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  onDelete(product: Product): void {
    if (this.selectedProduct.id == product.id){
      this.selectedProduct = null;
    }
    this.productService.deleteProduct(product);
    this.products = this.productService.getProducts();
  }
}
