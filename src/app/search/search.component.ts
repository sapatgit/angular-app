import { Component, OnInit } from '@angular/core';
import { GithubService } from '../githubservice.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public search = [];
  public prof = [];
  constructor(private _github:GithubService) {}

  ngOnInit() {
    this._github.getSearch().subscribe(data => {this.search = data;
      console.log(this.search)});
    this._github.getUser().subscribe(data => {this.prof = data;
      console.log(this.prof)});;
  }
}
