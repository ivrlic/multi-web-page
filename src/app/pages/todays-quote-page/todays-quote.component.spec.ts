import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysQuoteComponent } from './todays-quote.component';

describe('TodaysQuoteComponent', () => {
  let component: TodaysQuoteComponent;
  let fixture: ComponentFixture<TodaysQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodaysQuoteComponent]
    });
    fixture = TestBed.createComponent(TodaysQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
