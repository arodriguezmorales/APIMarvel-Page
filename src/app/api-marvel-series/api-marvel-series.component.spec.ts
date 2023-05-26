import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiMarvelSeriesComponent } from './api-marvel-series.component';

describe('ApiMarvelSeriesComponent', () => {
  let component: ApiMarvelSeriesComponent;
  let fixture: ComponentFixture<ApiMarvelSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiMarvelSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiMarvelSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
