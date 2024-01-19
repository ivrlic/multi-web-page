import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatPersonasComponent } from './great-personas.component';

describe('GreatPersonasComponent', () => {
  let component: GreatPersonasComponent;
  let fixture: ComponentFixture<GreatPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreatPersonasComponent]
    });
    fixture = TestBed.createComponent(GreatPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
