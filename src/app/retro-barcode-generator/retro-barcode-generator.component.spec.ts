import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroBarcodeGeneratorComponent } from './retro-barcode-generator.component';

describe('RetroBarcodeGeneratorComponent', () => {
  let component: RetroBarcodeGeneratorComponent;
  let fixture: ComponentFixture<RetroBarcodeGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroBarcodeGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroBarcodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
