import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/model/product';
import { ProductListService } from '../product-list/product-list.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filteredProducts: Product[] = [];
  _products: Product[] = [];
  _filterBy!: string;

  constructor(private pls: ProductListService) { }

  ngOnInit(): void {
  }

  filter(from: string, to: string){
    from = from.replace('R$','').replace('.','').replace(',00','.00')
    to = to.replace('R$', '').replace('.','').replace(',00','.00')
    this.filteredProducts = this.pls.filterPrice(from,to)
    console.log(this.filteredProducts)
  }

}
