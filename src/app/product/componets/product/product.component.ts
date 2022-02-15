import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../../core/model/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.componet.html',
  styleUrls: ['./product.componet.scss']
})

export class ProductComponent {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any>= new EventEmitter();

  today= new Date();

  constructor() {
    console.log('1. constructor');
  }

  agragarCarrito() {
    console.log( 'añadir al carrito');
    this.productClicked.emit(this.product.id);
  }

}



