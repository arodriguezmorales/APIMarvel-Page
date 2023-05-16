import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMarvelHomeComponent } from './api-marvel-home.component';

describe('ApiMarvelHomeComponent', () => {
  let component: ApiMarvelHomeComponent;
  let fixture: ComponentFixture<ApiMarvelHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMarvelHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMarvelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
