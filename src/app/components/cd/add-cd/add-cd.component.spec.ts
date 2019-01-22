import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCDComponent } from './add-cd.component';

describe('AddCDComponent', () => {
  let component: AddCDComponent;
  let fixture: ComponentFixture<AddCDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
