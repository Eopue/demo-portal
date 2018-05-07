import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuFromComponent } from './sku-from.component';

describe('SkuFromComponent', () => {
  let component: SkuFromComponent;
  let fixture: ComponentFixture<SkuFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
