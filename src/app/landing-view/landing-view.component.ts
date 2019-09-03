import { Component, OnInit } from '@angular/core';
import { GithubService } from '../githubservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
  public repos:any;
  public prof = [];

  constructor(private _github:GithubService, 
    private router:Router) { }

  ngOnInit() {
    this._github.getRepo().subscribe(data => this.repos = data);
    this._github.getUser().subscribe(data => this.prof = data);
  }

  routeToRepo(index) {
    // console.log('routing');
    var repo = this.repos[index];
    this.router.navigate(['/detail', repo.owner.login, repo.name, repo.id]);
  }
}
