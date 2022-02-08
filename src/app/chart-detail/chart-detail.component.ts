import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chart-detail',
  templateUrl: './chart-detail.component.html',
  styleUrls: ['./chart-detail.component.scss'],
})
export class ChartDetailComponent implements OnInit {

  constructor(private mdlctrl: ModalController) { }

  ngOnInit() {}

dismiss(){
  this.mdlctrl.dismiss();
}
}
