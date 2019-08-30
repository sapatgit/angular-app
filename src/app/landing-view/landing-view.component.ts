import { Component, OnInit } from '@angular/core';
import { GithubService } from '../githubservice.service';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {
  public repos:any;
  public prof = [];

  constructor(private _github:GithubService) { }

  ngOnInit() {
    this._github.getRepo().subscribe(data => this.repos = data);
    this._github.getUser().subscribe(data => {this.prof = data;
    console.log(this.prof);
    });
  }
}
