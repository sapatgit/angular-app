import { Component, OnInit } from '@angular/core';
import { GithubService } from '../githubservice.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {
  public isFav: boolean;
  // public repo = [];
  public repo:any;
  public owner;
  public name;
  public id;
  public prof = [];
  public fav:any;
  constructor(private _github:GithubService, 
              private router:Router,
              private route:ActivatedRoute) {
                this.route.params.subscribe(params => {
                  this.owner = params['owner'];
                  this.name = params['name'];
                  this.id = params['id'];
                });
  }
  ngOnInit() {
    this._github.getRepoDetail(this.owner, this.name).subscribe(data => {
      this.repo = data;
      this._github.checkFav(this.name)
      .subscribe(data2 => {
        if(data2['length']==0)
          this.isFav = true;
        else {
          this.isFav = false;
          this.fav = data2[0].comment;
        }
      });
    });
    this._github.getUser().subscribe(data => this.prof = data);
  }

  deleteRepo() {
    this._github.deleteRepo(this.owner, this.name).subscribe(data => data);
    this.router.navigateByUrl('#').then(() => {
      this.router.navigateByUrl(''); 
    });
  }

  addFav(comment) {
    this._github.addFavRepo(this.owner, this.name, this.id, comment);
    this.router.navigateByUrl('#').then(()=>
    {
      this.router.navigate(['/detail', this.owner, this.name, this.id])
    });
  }

  removeFav() {
    this._github.removeFavRepo(this.id);
    this.router.navigateByUrl('#').then(()=>
    {
      this.router.navigate(['/detail', this.owner, this.name, this.id])
    });
  }

  editFav(comment) {
    this._github.editFavRepo(this.id, comment);
  }
}
