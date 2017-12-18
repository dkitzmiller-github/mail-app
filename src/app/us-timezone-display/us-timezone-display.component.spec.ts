import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsTimezoneDisplayComponent } from './us-timezone-display.component';

describe('UsTimezoneDisplayComponent', () => {
  let component: UsTimezoneDisplayComponent;
  let fixture: ComponentFixture<UsTimezoneDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsTimezoneDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsTimezoneDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
