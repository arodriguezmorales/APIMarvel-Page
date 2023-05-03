import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMarvelComponent } from './api-marvel.component';

describe('ApiMarvelComponent', () => {
  let component: ApiMarvelComponent;
  let fixture: ComponentFixture<ApiMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
