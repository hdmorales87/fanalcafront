import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAreaEditComponent } from './sub-area-edit.component';

describe('SubAreaEditComponent', () => {
  let component: SubAreaEditComponent;
  let fixture: ComponentFixture<SubAreaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAreaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAreaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
