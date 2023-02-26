import { NgModule } from '@angular/core';
import { MatTabsModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { ActorsComponent } from './movie/actors/actors.component';
import { DetailsComponent } from './movie/details/details.component';
import { TheatersComponent } from './movie/theaters/theaters.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ActorsComponent,
    DetailsComponent,
    TheatersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
