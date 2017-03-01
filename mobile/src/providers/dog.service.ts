import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, ReplaySubject } from 'rxjs';

import 'rxjs/add/operator/map';

/*
 Generated class for the DogService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class DogService {

  private dogs: Array<any> = [
    {
      name: 'Wilco',
      breed: 'Setter irlandés',
    },
    {
      name: 'Aaron',
      breed: 'Pastor alemán',
    },
    {
      name: 'Milú',
      breed: 'Doberman',
    },
    {
      name: 'Rudy',
      breed: 'Labrador retriever',
    },
    {
      name: 'Tobby',
      breed: 'Setter irlandés',
    },
    {
      name: 'Kurtco',
      breed: 'Perro de agua',
    },
    {
      name: 'Atila',
      breed: 'Rottweiler',
    },
    {
      name: 'Snoopy',
      breed: 'Perro salchicha',
    },
    {
      name: 'Ava',
      breed: 'Braco alemán',
    },
    {
      name: 'Bearin',
      breed: 'Cocker',
    },
    {
      name: 'Museta',
      breed: 'Mastín del pirineo',
    },
    {
      name: 'Zarco',
      breed: 'Setter irlandés',
    }
  ];

  constructor(public http: Http) {
    this.dogs.forEach((dog, i) => {
      dog.img = `http://lorempixel.com/output/animals-q-c-640-480-${i % 10 + 1}.jpg`;
      dog.id = i;
    });
  }

  getDogs(): Observable<any[]> {
    const result = new ReplaySubject<any[]>();

    result.next(this.dogs);

    return result.asObservable();
  }

  getDogDetails(dogId: number): Observable<any> {
    const result = new ReplaySubject<any>();

    const dog = this.dogs.find(dog => dog.id === dogId);

    dog.city = 'Sevilla';
    dog.hasPedigree = true;
    dog.isChampion = false;
    dog.rate = 2.3;
    dog.numOfRatings = 25;
    dog.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus blanditiis commodi delectus harum quam';

    result.next(dog);

    return result.asObservable();
  }
}
