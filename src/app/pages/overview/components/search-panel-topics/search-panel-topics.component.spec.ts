import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchPanelTopicsComponent} from './search-panel-topics.component';

describe('SearchPanelTopicsComponent', () => {
  let component: SearchPanelTopicsComponent;
  let fixture: ComponentFixture<SearchPanelTopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPanelTopicsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPanelTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
