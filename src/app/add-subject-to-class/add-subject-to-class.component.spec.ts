import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubjectToClassComponent } from './add-subject-to-class.component';

describe('AddSubjectToClassComponent', () => {
  let component: AddSubjectToClassComponent;
  let fixture: ComponentFixture<AddSubjectToClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubjectToClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubjectToClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
