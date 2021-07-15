import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoccComponent } from './bocc.component';

describe('BoccComponent', () => {
  let component: BoccComponent;
  let fixture: ComponentFixture<BoccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
