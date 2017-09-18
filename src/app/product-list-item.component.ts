import { Component,EventEmitter, Input, Output } from '@angular/core';
import { Product }        from './product'

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItem {
  @Input() product: Product;
  @Output() onSelected = new EventEmitter<Product>();
  @Output() onDeleted = new EventEmitter<Product>();
  
    onSelect(): void {
      this.onSelected.emit(this.product);
    }

    onDelete(): void {
      this.onDeleted.emit(this.product);
    }
}
