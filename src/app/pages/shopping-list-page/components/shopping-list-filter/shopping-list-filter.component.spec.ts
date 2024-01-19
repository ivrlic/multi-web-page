import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListFilterComponent } from './shopping-list-filter.component';

describe('ShoppingListFilterComponent', () => {
  let component: ShoppingListFilterComponent;
  let fixture: ComponentFixture<ShoppingListFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListFilterComponent]
    });
    fixture = TestBed.createComponent(ShoppingListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
