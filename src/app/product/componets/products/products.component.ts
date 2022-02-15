import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/model/product-model';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
   // {
    //   estaba lista this.products en la []

    // }

  constructor(
    private productsService: ProductsService
  ){}

  clickProduct(id: number){
    // console.log('product');
    console.log(id);
  }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts()
      .subscribe(products => {
        this.products = products;
      });
  }
}

