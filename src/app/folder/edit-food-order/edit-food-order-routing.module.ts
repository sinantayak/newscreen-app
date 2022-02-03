import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFoodOrderPage } from './edit-food-order.page';

const routes: Routes = [
  {
    path: '',
    component: EditFoodOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFoodOrderPageRoutingModule {}
