import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnoffSwitchComponent } from './onoff-switch.component';

describe('OnoffSwitchComponent', () => {
  let component: OnoffSwitchComponent;
  let fixture: ComponentFixture<OnoffSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnoffSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnoffSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
