import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterService }  from './filter.service'
import { Product } from './product'

@Component({
  selector: 'action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {

    constructor(private filterService: FilterService){
      this.sortProperties = filterService.sortProperties;
    }

    sortProperties : Object[];

  @Output() onAdded = new EventEmitter<Product>();

  onAdd(): void {
    this.onAdded.emit();
  }
}