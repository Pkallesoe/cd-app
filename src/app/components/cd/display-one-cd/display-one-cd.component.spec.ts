import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayOneCDComponent } from './display-one-cd.component';

describe('DisplayOneCDComponent', () => {
  let component: DisplayOneCDComponent;
  let fixture: ComponentFixture<DisplayOneCDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayOneCDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayOneCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
