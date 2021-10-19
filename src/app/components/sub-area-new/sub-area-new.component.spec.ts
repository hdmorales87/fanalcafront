import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubAreaNewComponent } from './sub-area-new.component';

describe('SubAreaNewComponent', () => {
  let component: SubAreaNewComponent;
  let fixture: ComponentFixture<SubAreaNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubAreaNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubAreaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
