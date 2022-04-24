import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectableTagChipsComponent} from './selectable-tag-chips.component';
import {TagChipsImports} from '../tag-chips.imports';
import {TagChipsDeclarations} from '../tag-chips.declaration';

describe('TagChipsComponent', () => {
  let component: SelectableTagChipsComponent;
  let fixture: ComponentFixture<SelectableTagChipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TagChipsImports],
      declarations: [TagChipsDeclarations]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableTagChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
