import { Injectable } from '@angular/core';

import { Products }     from './mock_products';
import { Product }     from './product';

@Injectable()
export class ProductService {
  products :Product[];
  getProducts():  Product[]{ 
    // if ( !localStorage.hasOwnProperty['products']){
    //   localStorage['products'] =  Products;
    // }
    // return localStorage['products']; 
    if ( this.products== null){
      this.products = Products;
    }

    return this.products;
  }

  deleteProduct(product: Product){
    this.products = this.products.filter(p => p.id != product.id);
  }

  saveProduct(product: Product){
    let index = this.products.findIndex(p => p.id == product.id);
    if ( index != -1 ){
      this.products.splice(index,1,product)
      return;
    }
    this.products.push(product);
  }
}