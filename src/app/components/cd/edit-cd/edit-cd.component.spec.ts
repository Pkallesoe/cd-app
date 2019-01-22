import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCDComponent } from './edit-cd.component';

describe('EditCDComponent', () => {
  let component: EditCDComponent;
  let fixture: ComponentFixture<EditCDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
