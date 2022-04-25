import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

/**
 * Displays search for volume
 */
@Component({
  selector: 'app-search-panel-volume',
  templateUrl: './search-panel-volume.component.html',
  styleUrls: ['./search-panel-volume.component.scss']
})
export class SearchPanelVolumeComponent implements OnChanges {

  /** Filter value for costs per child */
  @Input() volumeValue: number | null = 0;
  /** Minimum value for costs per child */
  @Input() volumeMin = 0;
  /** Maximum value for costs per child */
  @Input() volumeMax = 0;
  /** Color for cost slider */
  @Input() volumeColor = 'primary';
  /** Event emitter indicating value being changed */
  @Output() valueChangedEmitter = new EventEmitter<number>();

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-changes lifecycle phase
   */
  ngOnChanges(changes: SimpleChanges) {
    this.volumeColor = 'primary';
  }

  //
  // Actions
  //

  /**
   * Handles value change
   * @param event new value
   */
  onValueChanged(event: number | null) {
    this.volumeValue = event;
    // @ts-ignore
    this.valueChangedEmitter.emit(event);
  }
}
