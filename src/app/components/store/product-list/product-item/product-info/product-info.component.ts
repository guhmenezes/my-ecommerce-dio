import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../model/product';
import { ProductListService } from '../../product-list.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product!: Product;

  constructor(
    private actRoute: ActivatedRoute,
    private pls: ProductListService) { }

  ngOnInit(): void {
    this.product = this.pls.getById(this.actRoute.snapshot.paramMap.get('id')!)
  }

  buy(qty:string){
    console.log(
    this.pls.buy((this.product).toString(), +qty))
  }
}
