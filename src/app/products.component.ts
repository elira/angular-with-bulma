import { Component, Input } from '@angular/core';
import { ProductService }        from './products.service'
import { Product }        from './product'

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class Products {
  @Input() products: Product[];
  
  onSelect(product: Product): void {
    //this.selectedProduct = product;
  }
  
    
}
