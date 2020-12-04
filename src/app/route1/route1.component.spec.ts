import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Route1Component } from './route1.component';

describe('Route1Component', () => {
  let component: Route1Component;
  let fixture: ComponentFixture<Route1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Route1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Route1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
