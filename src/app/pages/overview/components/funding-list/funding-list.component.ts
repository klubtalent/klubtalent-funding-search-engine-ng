import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Funding} from "../../../../core/funding/model/funding";

/**
 * Displays a project list
 */
@Component({
  selector: 'app-funding-list',
  templateUrl: './funding-list.component.html',
  styleUrls: ['./funding-list.component.scss']
})
export class FundingListComponent implements OnChanges {

  /** Map of projects */
  @Input() fundingsMap = new Map<string, Funding>();

  /** Event emitter indicating funding being clicked */
  @Output() fundingClickedEventEmitter = new EventEmitter<string>();

  /** Projects to be displayed */
  fundings: Funding[] = [];

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-changes lifecycle phase
   */
  ngOnChanges(changes: SimpleChanges) {
    this.initializeFundings();
  }

  //
  // Initialization
  //

  /**
   * Initializes projects
   */
  private initializeFundings() {
    this.fundings = Array.from(this.fundingsMap.values());
  }

  //
  // Actions
  //

  /**
   * Handles click on funding card
   * @param event funding name
   */
  onFundingClicked(event: string) {
    this.fundingClickedEventEmitter.emit(event);
  }
}
