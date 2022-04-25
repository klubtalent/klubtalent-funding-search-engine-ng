import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchPanelVolumeComponent} from './search-panel-volume.component';

describe('SearchPanelCostsComponent', () => {
  let component: SearchPanelVolumeComponent;
  let fixture: ComponentFixture<SearchPanelVolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPanelVolumeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelVolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
