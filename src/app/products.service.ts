import { Injectable } from '@angular/core';

import { Products }     from './mock_products';

@Injectable()
export class ProductService {
  getHeroes() { return Products; }
}