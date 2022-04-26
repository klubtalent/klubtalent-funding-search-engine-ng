import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Displays toolbar for details page
 */
@Component({
  selector: 'app-details-toolbar',
  templateUrl: './details-toolbar.component.html',
  styleUrls: ['./details-toolbar.component.scss']
})
export class DetailsToolbarComponent {

  /** Title */
  @Input() title = '';
  /** Event emitter indicating menu item being clicked */
  @Output() menuItemEventEmitter = new EventEmitter<string>();

  //
  // Actions
  //

  /**
   * Handles click on back button
   */
  onBackClicked() {
    this.menuItemEventEmitter.emit('back');
  }
}
