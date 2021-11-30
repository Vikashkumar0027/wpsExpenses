import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditJoblistingComponent } from './add-edit-joblisting.component';

describe('AddEditJoblistingComponent', () => {
  let component: AddEditJoblistingComponent;
  let fixture: ComponentFixture<AddEditJoblistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditJoblistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditJoblistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
