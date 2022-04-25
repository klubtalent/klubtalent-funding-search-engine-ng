import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OverviewToolbarComponent} from './overview-toolbar.component';

describe('OverviewToolbarComponent', () => {
  let component: OverviewToolbarComponent;
  let fixture: ComponentFixture<OverviewToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewToolbarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
