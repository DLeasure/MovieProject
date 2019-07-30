import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchListPageComponent } from './watch-list-page/watch-list-page.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [{
  path: '', component: MovieListComponent
}, {
  path: 'searchCriteria', component: SearchCriteriaComponent
}, {
  path: 'movieList', component: MovieListComponent
}, {
  path: 'watchList', component: WatchListPageComponent
}, {
  path: '**', component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
