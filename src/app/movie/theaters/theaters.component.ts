import { Component, OnInit } from '@angular/core';
import {ChildRouterComponent} from '../movie.component';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit, ChildRouterComponent {
  id = -1;
  movie: any;
  theaters: any[] | undefined;

  constructor(private service: MovieService) {
  }

  ngOnInit(): void {
    console.log('TheatersComponent ngOnInit');
    if (this.movie) {
      this.service.getTheaters(this.movie.id).subscribe(data => this.theaters = data);
    }
  }

  updateData(): void {
    console.log('TheatersComponent updateData');
    this.ngOnInit();
  }
}
