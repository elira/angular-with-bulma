import { Injectable } from '@angular/core';
import {Observable,  Subject} from 'rxjs';
import { Product } from './product';

@Injectable()
export class FilterService {
  filterchanged: Observable<Object>;
  private filterChangedSubject: Subject<Object>;
  
  private _filterText: string;
  private _sortBy: string;

  constructor() {
      this.filterChangedSubject = new Subject<Object>();
      this.filterchanged = this.filterChangedSubject.asObservable();
  }

  set filterText(text: string) {
    this._filterText = text;
    this.filterChangedSubject.next({});
  }

  get filterText(){
    return this._filterText;
  }

  set sortBy(text: string) {
    this._sortBy = text;
    this.filterChangedSubject.next({});    
  }

  get sortBy(){
    return this._sortBy;
  }

  filter(products: Product[]):Product[] {
    var filtered =null;;
    if ( this.filterText){
       filtered = products.filter(( p: Product) => 
      p.name.indexOf(this.filterText) != -1 || 
      (p.description && p.description.indexOf(this.filterText) != -1))
    } else {
      filtered = products;
    }
    
      var sorted =filtered;
    if (this._sortBy == this.sortProperties[1].value){
      sorted = filtered.sort((a: Product, b:Product )=> 
      a.creationDate.getTime() -b.creationDate.getTime())
    } else {
      sorted = filtered.sort((a: Product, b:Product )=> 
        a.name.localeCompare(b.name))
    }

    return sorted;
  }

  sortProperties = [{
      text: 'Name',
      value:'name'
    },{
      text: 'Recently Added',
      value:'date'
    }
  ]
}