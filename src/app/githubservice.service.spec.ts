import { TestBed } from '@angular/core/testing';

import { GithubService } from './githubservice.service';

describe('GithubServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubService = TestBed.get(GithubService);
    expect(service).toBeTruthy();
  });
});
