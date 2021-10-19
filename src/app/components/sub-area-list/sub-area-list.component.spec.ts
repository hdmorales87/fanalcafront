import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAreaListComponent } from './sub-area-list.component';

describe('SubAreaListComponent', () => {
  let component: SubAreaListComponent;
  let fixture: ComponentFixture<SubAreaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAreaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAreaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
