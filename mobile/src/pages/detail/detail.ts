import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { DogService } from '../../providers/dog.service';

/*
 Generated class for the Detail page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  dog: any = {};

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private loadingController: LoadingController,
              private dogService: DogService) {
  }

  ionViewDidLoad() {
    const loader = this.loadingController.create({
      content: 'Getting dogs...'
    });

    loader.present();

    this.dogService.getDogDetails(this.navParams.data)
        .subscribe(dog => {
          this.dog = dog;
          loader.dismissAll();
        });
  }

}
