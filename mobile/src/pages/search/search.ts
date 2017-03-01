import { Component } from '@angular/core';

import { LoadingController, NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { DogService } from '../../providers/dog.service';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  dogs: any[];

  constructor(private navCtrl: NavController,
              private loadingController: LoadingController,
              private dogService: DogService) {

  }

  ionViewDidEnter() {
    const loader = this.loadingController.create({
      content: 'Getting dogs...'
    });

    loader.present();

    this.dogService.getDogs()
        .subscribe(dogs => {
          this.dogs = dogs;
          loader.dismissAll();
        });
  }

  goToDogDetails(dogId) {
    this.navCtrl.push(DetailPage, dogId);
  }

}
