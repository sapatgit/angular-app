import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredReposComponent } from './starred-repos.component';

describe('StarredReposComponent', () => {
  let component: StarredReposComponent;
  let fixture: ComponentFixture<StarredReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
