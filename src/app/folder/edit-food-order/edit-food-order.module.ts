import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFoodOrderPageRoutingModule } from './edit-food-order-routing.module';

import { EditFoodOrderPage } from './edit-food-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFoodOrderPageRoutingModule
  ],
  declarations: [EditFoodOrderPage]
})
export class EditFoodOrderPageModule {}
