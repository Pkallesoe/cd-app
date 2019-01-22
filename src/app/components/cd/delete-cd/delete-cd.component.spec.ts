import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCDComponent } from './delete-cd.component';

describe('DeleteCDComponent', () => {
  let component: DeleteCDComponent;
  let fixture: ComponentFixture<DeleteCDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
