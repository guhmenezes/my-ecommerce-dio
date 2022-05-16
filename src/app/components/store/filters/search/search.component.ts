import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../../product-list/model/product';
import { ProductListService } from '../../product-list/product-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filteredProducts: Product[] = [];
  _products: Product[] = [];
  _filterBy!: string;
  active: boolean = false;

  constructor(private pls: ProductListService) { }

  ngOnInit(): void {
    this.filteredProducts = this.pls.getAllProducts()
  }

  set search(input: string){
    console.log(this.pls.search(input))
    this.filteredProducts = this.pls.search(input)
  }

}
