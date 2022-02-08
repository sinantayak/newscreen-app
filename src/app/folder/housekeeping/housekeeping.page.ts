import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChartDetailComponent } from 'src/app/chart-detail/chart-detail.component';
import { MoreDetailComponent } from 'src/app/more-detail/more-detail.component';

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

async moreDetail(){
  const more = await this.mdlctrl.create({
    component: MoreDetailComponent,
    cssClass: 'more-detail-css',
    swipeToClose: true,
    presentingElement: await this.mdlctrl.getTop(),
  });
  return await more.present();
}
}
