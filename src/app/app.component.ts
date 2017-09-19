import { Component } from '@angular/core';
import { ProductService }        from './products.service';
import { FilterService }        from './filter.service';
import { Product }        from './product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService,
    FilterService]
})
export class AppComponent {
  title = 'My Store!';
  products: Product[];
  selectedProduct: Product;

  constructor(private productService:  ProductService,
    private filterService: FilterService) { 
    this.products = this.productService.getProducts();
    this.selectedProduct = this.products[0];

    filterService.filterchanged.subscribe((o: Object) => {
      this.filter() });
  }

  filter(){
    this.products = this.filterService.filter(this.productService.getProducts());
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

  onSave(product: Product): void {
    this.productService.saveProduct(product);
    this.products = this.productService.getProducts();
    this.selectedProduct = product;    
  }

  onAdd(): void {
    this.selectedProduct = {
      id: null,
      name: null,
      price: null,
      creationDate: new Date()
    };
  }
}
