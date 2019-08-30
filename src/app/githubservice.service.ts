import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      'Authorization': 'Token 828fba18fa60300f5569421e9d85fee4caa8ccb5'
    })
  }

  getRepo() {
    var user_repos_url = this.github_url + '/user/repos';
    return this.http.get<any>(user_repos_url, this.httpOptions);
  }

  getStarred() {
    var starred_repos_url = this.github_url + '/user/starred';
    return this.http.get<any>(starred_repos_url, this.httpOptions);
  }

  getUser(): Observable<User[]> {
    var user_profile_url = this.github_url + '/user';
    return this.http.get<User[]>(user_profile_url, this.httpOptions);
  }

  setSearch(query) {
    this.search_query = query;
    console.log('query' + this.search_query);
  }

  getSearch() {
    var search_url = this.github_url + '/search/repositories?q=' + this.search_query;
    console.log('hey' + search_url);
    return this.http.get<User[]>(search_url);
  }
  
}
