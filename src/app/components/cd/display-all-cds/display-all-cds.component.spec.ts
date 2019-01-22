import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllCDsComponent } from './display-all-cds.component';

describe('DisplayAllCDsComponent', () => {
  let component: DisplayAllCDsComponent;
  let fixture: ComponentFixture<DisplayAllCDsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllCDsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllCDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
