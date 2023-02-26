import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './movie/actors/actors.component';
import { DetailsComponent } from './movie/details/details.component';
import { MovieComponent } from './movie/movie.component';
import { TheatersComponent } from './movie/theaters/theaters.component';

const routes: Routes = [
  {path: 'movie/:id', component: MovieComponent,
  children: [
    {path: 'details', component: DetailsComponent},
    {path: 'actors', component: ActorsComponent},
    {path: 'theaters', component: TheatersComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
