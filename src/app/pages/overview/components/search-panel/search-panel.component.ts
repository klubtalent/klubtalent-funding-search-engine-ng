import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

/**
 * Displays search panel
 */
@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent {

  /** Map of sports */
  @Input() sportsValuesMap: Map<string, [string, boolean, boolean]> = new Map<string, [string, boolean, boolean]>();
  /** Background color for goal tags */
  @Input() sportsBackgroundColor = 'transparent';
  /** Map of types */
  @Input() typesValuesMap: Map<string, [string, boolean, boolean]> = new Map<string, [string, boolean, boolean]>();
  /** Background color for types tags */
  @Input() typesBackgroundColor = 'transparent';

  /** Filter value for costs per child */
  @Input() volumeValue = 0;
  /** Minimum value for costs per child */
  @Input() volumeMin = 0;
  /** Maximum value for costs per child */
  @Input() volumeMax = 0;
  /** Color for cost slider */
  @Input() volumeColor = 'transparent';

  /** Event emitter indicating filter value being changed */
  @Output() sportsSelectedEmitter = new EventEmitter<Map<string, [string, boolean, boolean]>>();
  /** Event emitter indicating filter value being changed */
  @Output() typesSelectedEmitter = new EventEmitter<Map<string, [string, boolean, boolean]>>();
  /** Event emitter indicating filter value being changed */
  @Output() volumeSelectedEmitter = new EventEmitter<number>();

  /** Number */
  num = Number;

  /**
   * Handles selection of sports
   * @param event map of sports
   */
  onSportsSelected(event: Map<string, [string, boolean, boolean]>) {
    this.sportsSelectedEmitter.emit(event);
  }

  /**
   * Handles selection of types
   * @param event map of types
   */
  onTypesSelected(event: Map<string, [string, boolean, boolean]>) {
    this.typesSelectedEmitter.emit(event);
  }

  /**
   * Handles selection of a price limit
   * @param event price limit
   */
  onPriceSelected(event: number) {
    this.volumeSelectedEmitter.emit(event);
  }
}
