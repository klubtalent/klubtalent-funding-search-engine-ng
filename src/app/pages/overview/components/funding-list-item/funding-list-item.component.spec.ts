import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingListItemComponent } from './funding-list-item.component';

describe('ProjectListItemComponent', () => {
  let component: FundingListItemComponent;
  let fixture: ComponentFixture<FundingListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
