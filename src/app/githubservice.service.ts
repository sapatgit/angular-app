import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { User } from './userData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {  
  constructor(private http: HttpClient) {
  }
  
  public username = '/sapgit97';
  public github_url = 'https://api.github.com';

  public search_query = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Token ecec100a762e7655d6a8013b3b665418e5d38fd7'
    })
  }

  getRepo() {
    var user_repos_url = this.github_url + '/user/repos';
    return this.http.get<any>(user_repos_url, this.httpOptions);
  }

  getRepoDetail(owner, name) {
    var repo_url = this.github_url + '/repos/' + owner + '/' + name;
    return this.http.get<any>(repo_url, this.httpOptions);
  }

  getStarred() {
    var starred_repos_url = 'http://localhost:3000/stars/';
    return this.http.get<any>(starred_repos_url);
  }

  getUser(): Observable<User[]> {
    var user_profile_url = this.github_url + '/user';
    return this.http.get<User[]>(user_profile_url, this.httpOptions);
  }

  setSearch(query) {
    this.search_query = query;
  }

  getSearch() {
    var search_url = this.github_url + '/search/repositories?q=' + this.search_query;
    return this.http.get<User[]>(search_url);
  }

  public data:any;
  createRepo(value:any):Observable<any> {
    return this.http.post(this.github_url + '/user/repos', JSON.stringify(value), this.httpOptions);
  }    

  deleteRepo(owner:string, repo:string):Observable<any> {
    return this.http.delete(this.github_url + '/repos/' + owner + '/' + repo, this.httpOptions);
  }

  checkFav(repo_name:string){
    return this.http.get(' http://localhost:3000/stars?name='+repo_name);
  }

  addFavRepo(repoOwner:string, repoName:string, repoId:number, comment) {
    var httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    var json = {
      id: String(repoId),
      name: String(repoName),
      owner: String(repoOwner),
      comment: String(comment)
    };
    this.http.post('http://localhost:3000/stars/', JSON.stringify(json), httpOption).subscribe();
  }

  removeFavRepo(id:string) {
    this.http.delete('http://localhost:3000/stars/'+ String(id)).subscribe();
  }

  editFavRepo(repoId:number, comment) {
    var httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    var json = {
      comment: String(comment)
    };
    this.http.patch('http://localhost:3000/stars/'+repoId, JSON.stringify(json), httpOption).subscribe();
  }
}
