import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationsErrorsComponent } from './validations-errors.component';

describe('ValidationsErrorsComponent', () => {
  let component: ValidationsErrorsComponent;
  let fixture: ComponentFixture<ValidationsErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationsErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationsErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
