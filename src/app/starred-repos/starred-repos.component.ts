import { Component, OnInit } from '@angular/core';
import { GithubService } from '../githubservice.service';

@Component({
  selector: 'app-starred-repos',
  templateUrl: './starred-repos.component.html',
  styleUrls: ['./starred-repos.component.css']
})
export class StarredReposComponent implements OnInit {
  public stars:any;
  public prof = [];
  constructor(private _github:GithubService) {}

  ngOnInit() {
    this._github.getStarred().subscribe(data => this.stars = data);
    this._github.getUser().subscribe(data => this.prof = data);
  }

}
