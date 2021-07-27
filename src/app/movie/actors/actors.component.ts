import {Component, OnInit} from '@angular/core';
import {ChildRouterComponent} from '../movie.component';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit, ChildRouterComponent {
  id = 0;
  movie: any;
  actors: any[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
    console.log('ActorsComponent ngOnInit');
    if (this.movie) {
      this.actors = this.movie.actors;
    }
  }

  updateData(): void {
    console.log('ActorsComponent updateData');
    this.ngOnInit();
  }
}
