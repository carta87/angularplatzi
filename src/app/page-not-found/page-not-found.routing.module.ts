import {  NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router} from '@angular/router';

import { PageNotFoundComponent } from './componets/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent
  }
];

@NgModule ( {
imports: [
  RouterModule.forChild(routes),
],
exports:[
  RouterModule
]

})
export class PageNotFoundComponentModule {}
