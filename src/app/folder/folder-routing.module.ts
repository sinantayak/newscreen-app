import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'edit-food-order',
    loadChildren: () => import('./edit-food-order/edit-food-order.module').then( m => m.EditFoodOrderPageModule)
  },
  {
    path: 'housekeeping',
    loadChildren: () => import('./housekeeping/housekeeping.module').then( m => m.HousekeepingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
