import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalcorComponent } from './falcor.component';

describe('FalcorComponent', () => {
  let component: FalcorComponent;
  let fixture: ComponentFixture<FalcorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalcorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalcorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
