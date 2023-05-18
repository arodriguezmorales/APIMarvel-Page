import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMarvelCharactersComponent } from './api-marvel-characters.component';

describe('ApiMarvelCharactersComponent', () => {
  let component: ApiMarvelCharactersComponent;
  let fixture: ComponentFixture<ApiMarvelCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMarvelCharactersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMarvelCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
