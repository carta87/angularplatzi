import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './componets/demo/demo.component'
import { DemoRoutingModule } from './demo-routing.modele';
import { SharedModule } from './../shared/shared.module';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DemoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }
