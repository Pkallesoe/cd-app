import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCDsComponent } from './search-cds.component';

describe('SearchCDsComponent', () => {
  let component: SearchCDsComponent;
  let fixture: ComponentFixture<SearchCDsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCDsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
