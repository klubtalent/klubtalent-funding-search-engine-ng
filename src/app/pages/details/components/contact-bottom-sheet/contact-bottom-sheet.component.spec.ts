import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ContactBottomSheetComponent} from './contact-bottom-sheet.component';

describe('ContactBottomSheetComponent', () => {
  let component: ContactBottomSheetComponent;
  let fixture: ComponentFixture<ContactBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactBottomSheetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
