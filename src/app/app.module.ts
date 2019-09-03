import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubService } from './githubservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RepoDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
