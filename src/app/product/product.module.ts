import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent} from './componets/product/product.component';
import { ProductsComponent } from './componets/products/products.component';
import { ProductDetailComponent } from './componets/product-detail/product-detail.component';
import { ProductRoutingModule } from './product.routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductDetailComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProductRoutingModule,
    MaterialModule

  ]
})
export class ProductModule { }
