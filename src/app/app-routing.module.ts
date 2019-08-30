import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarredReposComponent } from './starred-repos/starred-repos.component';
import { CreateRepoComponent } from './create-repo/create-repo.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: LandingViewComponent, pathMatch: 'full'},
  {path: 'starred', component: StarredReposComponent },
  {path: 'create-repo', component: CreateRepoComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LandingViewComponent, StarredReposComponent, CreateRepoComponent, SearchComponent, PageNotFoundComponent];