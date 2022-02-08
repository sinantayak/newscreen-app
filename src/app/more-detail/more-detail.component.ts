import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.scss'],
})
export class MoreDetailComponent implements OnInit {

  constructor( private mdlctrl: ModalController) { }

  ngOnInit() {}


dismiss(){
  this.mdlctrl.dismiss();
}
}
