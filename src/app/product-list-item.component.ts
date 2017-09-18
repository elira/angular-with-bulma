import { Component, Input } from '@angular/core';
import { Product }        from './product'

@Component({
  selector: 'product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css']
})
export class ProductListItem {
  @Input() product: Product;
}
