import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExponencialPipe } from './pipes/exponencial/exponencial.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { CartComponent } from './componets/cart/cart.component';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ExponencialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,


  ],
  exports: [
    ExponencialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
