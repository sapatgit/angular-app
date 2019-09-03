import { Component, OnInit } from '@angular/core';
import { GithubService } from '../githubservice.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-repo',
  templateUrl: './create-repo.component.html',
  styleUrls: ['./create-repo.component.css']
})
export class CreateRepoComponent implements OnInit {
  public prof = [];
  constructor(private _github:GithubService, private router: Router) {}

  ngOnInit() {
    this._github.getUser().subscribe(data => this.prof = data);
  }

  createRepoSubmit(form: NgForm) {
    this._github.createRepo(form.value).subscribe(data => data);
    this.router.navigateByUrl('#').then(() => {
      this.router.navigateByUrl(''); 
    });
  }
}
