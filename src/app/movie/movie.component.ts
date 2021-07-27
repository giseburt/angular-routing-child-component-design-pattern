import {Component, OnInit} from '@angular/core';
import {MovieService} from './movie.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: any;
  movieId = 1;
  navLinks: any[];
  activeLinkIndex = -1;
  childComponent: ChildRouterComponent | undefined;

  constructor(private service: MovieService,
              private route: ActivatedRoute,
              private router: Router) {
    this.navLinks = [
      {
        label: 'Details',
        link: './details',
        index: 0
      }, {
        label: 'Actors',
        link: './actors',
        index: 1
      }, {
        label: 'Theater',
        link: './theaters',
        index: 2
      },
    ];
  }

  ngOnInit(): void {
    console.log('Parent ngOnInit');
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getMovie(this.movieId).subscribe(data => this.movie = data);
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
    if (this.childComponent) {
      this.childComponent.id = this.movieId;
      this.childComponent.movie = this.movie;
      this.childComponent.updateData();
    }
  }

  onRouterActivate(component: any): void {
    console.log('Parent onRouterActivate');
    this.childComponent = component as ChildRouterComponent;
    this.childComponent.id = this.movieId;
    this.childComponent.movie = this.movie;
    this.childComponent.updateData();
  }
}

export interface ChildRouterComponent {
  id: number;
  movie: any;

  updateData(): void;
}
