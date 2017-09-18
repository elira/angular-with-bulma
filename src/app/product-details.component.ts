import { Component,
   Input,
   OnChanges,
   SimpleChanges,
   Output,
   EventEmitter} from '@angular/core';
import { Product }        from './product'

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetails {
  @Input() product: Product;
  @Output() onSaved = new EventEmitter<Product>();
  
  productEdit: Product;

  submitted = false;
  
  onSubmit() { 
    this.submitted = true; 
    this.onSaved.emit(this.productEdit);
  }

  save(): void{
    this.onSaved.emit(this.productEdit);
  }

  ngOnChanges(changes: SimpleChanges) {
    var product = changes['product'].currentValue;
    if (product == null) {
      this.productEdit = null;
      return;
    }

    this.productEdit = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      creationDate: product.creationDate
    };
  }
}
