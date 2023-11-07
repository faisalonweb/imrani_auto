import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuContentPage } from './menu-content.page';

const routes: Routes = [
  {
    path: '',
    component: MenuContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuContentPageRoutingModule {}
