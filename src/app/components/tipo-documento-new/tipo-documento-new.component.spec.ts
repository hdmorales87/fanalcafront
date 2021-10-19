import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDocumentoNewComponent } from './tipo-documento-new.component';

describe('TipoDocumentoNewComponent', () => {
  let component: TipoDocumentoNewComponent;
  let fixture: ComponentFixture<TipoDocumentoNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDocumentoNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDocumentoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
