import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradecoinComponent } from './tradecoin.component';

describe('TradecoinComponent', () => {
  let component: TradecoinComponent;
  let fixture: ComponentFixture<TradecoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TradecoinComponent]
    });
    fixture = TestBed.createComponent(TradecoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
