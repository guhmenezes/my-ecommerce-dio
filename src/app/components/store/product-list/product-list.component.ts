import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from './model/product';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'] 
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  constructor(private prodService: ProductListService) { }

  ngOnInit(): void {
    this.products = this.prodService.getAllProducts();
    console.log(this.products)
  }

}
