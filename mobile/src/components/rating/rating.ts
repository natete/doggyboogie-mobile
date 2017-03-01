import { Component, Input } from '@angular/core';

/*
 Generated class for the Rating component.

 See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 for more info on Angular 2 Components.
 */
@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent {

  @Input() rate: number;

  constructor() {

  }

}
