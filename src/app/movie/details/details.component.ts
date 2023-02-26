import { Component, OnInit } from '@angular/core';
import { ChildRouterComponent } from '../movie.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, ChildRouterComponent  {
  id = 0;
  movie: any;

  constructor() { }

  ngOnInit(): void {
    console.log('DetailsComponent ngOnInit');
  }

  updateData(): void {
    console.log('DetailsComponent updateDate');
    this.ngOnInit();
  }
}
