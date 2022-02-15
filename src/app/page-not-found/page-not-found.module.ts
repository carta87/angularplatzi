import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponentModule } from './page-not-found.routing.module';
import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    PageNotFoundComponentModule,
    SharedModule
  ]
})
export class PageNotFoundModule { }
