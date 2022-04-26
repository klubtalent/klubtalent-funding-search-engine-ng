import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Displays search panel for topics
 */
@Component({
  selector: 'app-search-panel-topics',
  templateUrl: './search-panel-topics.component.html',
  styleUrls: ['./search-panel-topics.component.scss']
})
export class SearchPanelTopicsComponent {

  /** Map of filter values */
  @Input() valuesMap: Map<string, [string, boolean, boolean]> = new Map<string, [string, boolean, boolean]>();
  /** Border color for tags */
  @Input() border = "transparent";
  /** Background color for tags */
  @Input() background = "transparent";
  /** Event emitter indicating tags being changed */
  @Output() tagsChangedEmitter = new EventEmitter<Map<string, [string, boolean, boolean]>>();

  //
  // Actions
  //

  /**
   * Handles tag selection
   * @param event event
   */
  onTagsSelected(event: Map<string, [string, boolean, boolean]>) {
    this.tagsChangedEmitter.emit(event);
  }
}
