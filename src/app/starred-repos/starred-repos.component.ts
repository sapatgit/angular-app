import { Component, OnInit } from '@angular/core';
import { GithubService } from '../githubservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starred-repos',
  templateUrl: './starred-repos.component.html',
  styleUrls: ['./starred-repos.component.css']
})
export class StarredReposComponent implements OnInit {
  public stars:any;
  public isEmpty = true;
  public prof = [];
  constructor(private _github:GithubService, private router:Router) {}

  ngOnInit() {
    this._github.getStarred().subscribe(data => {
      this.stars = data;
      if(data['length']==0)
        this.isEmpty = true;
      else
        this.isEmpty = false;
    });
    this._github.getUser().subscribe(data => this.prof = data);
  }

  routeToRepo(index:number) {
    var repo = this.stars[index];
    this.router.navigate(['/detail', repo.owner, repo.name, repo.id]);
  }
}
