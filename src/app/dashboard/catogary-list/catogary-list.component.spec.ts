import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogaryListComponent } from './catogary-list.component';

describe('CatogaryListComponent', () => {
  let component: CatogaryListComponent;
  let fixture: ComponentFixture<CatogaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatogaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatogaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
