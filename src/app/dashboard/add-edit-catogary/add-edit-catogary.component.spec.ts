import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCatogaryComponent } from './add-edit-catogary.component';

describe('AddEditCatogaryComponent', () => {
  let component: AddEditCatogaryComponent;
  let fixture: ComponentFixture<AddEditCatogaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCatogaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCatogaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
