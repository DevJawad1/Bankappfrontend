import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbgComponent } from './addbg.component';

describe('AddbgComponent', () => {
  let component: AddbgComponent;
  let fixture: ComponentFixture<AddbgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbgComponent]
    });
    fixture = TestBed.createComponent(AddbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
