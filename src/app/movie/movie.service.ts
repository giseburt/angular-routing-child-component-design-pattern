import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() {
  }

  getTheaters(id: number): Observable<any> {
      if (id === 1){
        return of([theater[0], theater[2]]);
      }
      return of([theater[1], theater[2]]);
  }

  getMovie(id: number): Observable<any> {
    // In reality we would do some http call here to get the data.
    if (this.isEven(id)) {
      return of(MOVIE_DATA_2);
    }
    return of(MOVIE_DATA_1);
  }

  isEven(n: number): boolean {
    return n % 2 === 0;
  }

  isOdd(n: number): boolean {
    return Math.abs(n % 2) === 1;
  }
}

const theater = [
  {
    name: 'Sun and Surf',
    address: '1234 Ocean Hwy Ocean City, Md 21345',
    phoneNumber: '555-film'
  },
  {
    name: 'Megaplex',
    address: '14 Main St Berlin, Md 21346',
    phoneNumber: '555-filk'
  },
  {
    name: 'Regal',
    address: '155 Elm St Franklin, Md 21346',
    phoneNumber: '555-movi'
  }
];

const MOVIE_DATA_1 = {
  id: 1,
  title: 'Dune',
  releaseDate: '2020-10-22',
  duration: '2h 35m',
  director: 'Denis Villeneuve',
  actors: [
    {
      name: 'Rebecca Ferguson',
      character: 'Lady Jessica',
      dob: '10/16/1983'
    },
    {
      name: 'Zendaya',
      character: 'Chani',
      dob: '9/1/1996'
    },
    {
      name: 'Timothée Chalamet',
      character: 'Paul Atreides',
      dob: '12/27/1995'
    },
    {
      name: 'Jason Momoa',
      character: 'Duncan Idaho',
      dob: '8/1/1979'
    }
  ]
};
const MOVIE_DATA_2 = {
  id: 2,
  title: 'The Princess Bride',
  releaseDate: '1987',
  duration: '1h 38m',
  director: 'Rob Reiner',
  actors: [
    {
      name: 'Cary Elwes',
      character: 'Westley',
      dob: '10/26/1962'
    },
    {
      name: 'Mandy Patinkin',
      character: 'Iñigo Montoya',
      dob: '11/30/1952'
    },
    {
      name: 'Robin Wright',
      character: 'The Princess Bride',
      dob: '4/8/1966'
    },
    {
      name: 'Andre the Giant',
      character: 'Fezzik',
      dob: '1/28/1946'
    }
  ]
};
