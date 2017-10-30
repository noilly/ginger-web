import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GngrEditorComponent } from './gngr-editor.component';

describe('GngrEditorComponent', () => {
  let component: GngrEditorComponent;
  let fixture: ComponentFixture<GngrEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GngrEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GngrEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
