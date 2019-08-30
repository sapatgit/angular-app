import { Component } from '@angular/core';
import { GithubService } from './githubservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _github:GithubService, private router: Router) {}
  
  onSearch(query: string) {
    this._github.setSearch(query);
  }
  routeToSearch() {
      this.router.navigateByUrl("").then(() => {
        this.router.navigateByUrl('search');
      });
  }
}
