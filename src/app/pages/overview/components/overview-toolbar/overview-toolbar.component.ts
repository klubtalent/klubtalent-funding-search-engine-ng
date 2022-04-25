import {Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

/**
 * Displays toolbar for overview page
 */
@Component({
  selector: 'app-overview-toolbar',
  templateUrl: './overview-toolbar.component.html',
  styleUrls: ['./overview-toolbar.component.scss'],
  animations: [
    trigger('searchResetButtonAnimation', [
      state('open', style({
        opacity: '1',
        overflow: 'hidden',
        width: '*'
      })),
      state('closed', style({
        opacity: '0',
        overflow: 'hidden',
        width: '0px'
      })),
      transition('* => *', animate('400ms ease-in-out'))
    ])
  ]
})
export class OverviewToolbarComponent {

  /** State of the search panel */
  @Input() searchPanelState = "closed";
  /** Event emitter indicating menu item being clicked */
  @Output() menuItemEventEmitter = new EventEmitter<string>();

  //
  // Actions
  //

  /**
   * Handles click on filter button
   */
  onFilterClicked() {
    this.menuItemEventEmitter.emit('filter');
  }

  /**
   * Handles click on reset filter button
   */
  onResetFilterClicked() {
    this.menuItemEventEmitter.emit('filter-reset');
  }
}
