import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcastweatherComponent } from './forcastweather.component';

describe('ForcastweatherComponent', () => {
  let component: ForcastweatherComponent;
  let fixture: ComponentFixture<ForcastweatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForcastweatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForcastweatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
