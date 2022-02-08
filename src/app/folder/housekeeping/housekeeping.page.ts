import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChartDetailComponent } from 'src/app/chart-detail/chart-detail.component';

@Component({
  selector: 'app-housekeeping',
  templateUrl: './housekeeping.page.html',
  styleUrls: ['./housekeeping.page.scss'],
})
export class HousekeepingPage implements OnInit {

  constructor( 
    private mdlctrl: ModalController) { }

  ngOnInit() {
    
  
  }
async openLog() {
  const log = await this.mdlctrl.create({
    component: ChartDetailComponent,
    cssClass: 'chart-detail-css',
    swipeToClose: true,
    presentingElement: await this.mdlctrl.getTop(),
  });
  return await log.present();

}
}
