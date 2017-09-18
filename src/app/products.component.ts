import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService }        from './products.service'
import { Product }        from './product'

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class Products {
  @Input() products: Product[];
  @Output() onSelected = new EventEmitter<Product>();
  @Output() onDeleted = new EventEmitter<Product>();
  
  
  onSelect(product: Product): void {
    this.onSelected.emit(product);
  }
  
  onDelete(product: Product): void {
    this.onDeleted.emit(product);
  }    
}
