import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

/**
 * Represents a selectable tag
 */
export class SelectableTag {
  /** Tag name */
  name: string;
  /** Tag icon */
  icon: string;
  /** Selected */
  selected: boolean;
  /** Disabled */
  disabled: boolean;

  /**
   * Constructor
   * @param name name
   * @param icon icon
   * @param selected selected
   * @param disabled disabled
   */
  constructor(name: string, icon: string, selected: boolean, disabled: boolean) {
    this.name = name;
    this.icon = icon;
    this.selected = selected;
    this.disabled = disabled;
  }
}

/**
 * Displays tag chips
 */
@Component({
  selector: 'app-selectable-tag-chips',
  templateUrl: './selectable-tag-chips.component.html',
  styleUrls: ['./selectable-tag-chips.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectableTagChipsComponent implements OnChanges {

  /** Tags to be displayed */
  @Input() selectableTagsMap: Map<string, [string, boolean, boolean]> = new Map<string, [string, boolean, boolean]>();
  /** Whether the component is readonly */
  @Input() readonly = false;
  /** Array of options */
  @Input() tagOptions: string[] = [];
  /** Text color of the tag */
  @Input() color = 'black';
  /** Border color of the tag */
  @Input() border = 'transparent';
  /** Background color of the tag */
  @Input() background = 'transparent';
  /** Placeholder for new elements */
  @Input() placeholder = 'New tag';
  /** Event emitter indicating changes in tags */
  @Output() tagsChangedEmitter = new EventEmitter<Map<string, [string, boolean, boolean]>>();

  /** List of selectable tags */
  selectableTags: SelectableTag[] = [];

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-changes lifecycle phase
   */
  ngOnChanges(changes: SimpleChanges) {
    this.initializeSelectableTags();
  }

  //
  // Initialization
  //

  /**
   * Initializes selectable tags
   */
  private initializeSelectableTags() {
    this.selectableTags = [];
    this.selectableTagsMap.forEach((value: [string, boolean, boolean], key: string) => {
      this.selectableTags.push(new SelectableTag(key, value[0], value[1], value[2]));
    });

    this.selectableTags.sort((a: SelectableTag, b: SelectableTag) => {
      return a.name.localeCompare(b.name);
    });
  }

  //
  // Actions
  //

  /**
   * Handles click on a tag
   * @param tag tag being clicked
   */
  onTagClicked(tag: SelectableTag) {
    if (!tag.disabled) {
      this.selectableTagsMap.set(tag.name, [tag.icon, !tag.selected, tag.disabled]);
      this.initializeSelectableTags();

      this.tagsChangedEmitter.emit(this.selectableTagsMap);
    }
  }

  //
  // Helpers
  //

  /**
   * Gets a chip border
   */
  getBorder() {
    return `${this.border} 2px solid`;
  }

  /**
   * Gets a chip background
   */
  getBackground(tag: SelectableTag) {
    return tag.selected ? this.background : 'transparent';
  }

  /**
   * Gets a chip disabled state
   */
  getDisabled(tag: SelectableTag) {
    return tag.disabled;
  }
}
