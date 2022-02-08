import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/order-detail',
    pathMatch: 'full'
  },
  {
    path: 'folder/order-detail',
    loadChildren: () => import('./folder/order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'folder/edit-food-order',
    loadChildren: () => import('./folder/edit-food-order/edit-food-order.module').then( m => m.EditFoodOrderPageModule)
  },
  {
    path: 'folder/housekeeping',
    loadChildren: () => import('./folder/housekeeping/housekeeping.module').then( m => m.HousekeepingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
