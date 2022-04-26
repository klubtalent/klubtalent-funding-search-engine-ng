import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsToolbarComponent} from './details-toolbar.component';

describe('DetailsToolbarComponent', () => {
  let component: DetailsToolbarComponent;
  let fixture: ComponentFixture<DetailsToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsToolbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
