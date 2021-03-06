import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Funding} from "../../../../core/funding/model/funding.model";

/**
 * Displays a funding list
 */
@Component({
  selector: 'app-funding-list',
  templateUrl: './funding-list.component.html',
  styleUrls: ['./funding-list.component.scss']
})
export class FundingListComponent implements OnChanges {

  /** Map of projects */
  @Input() fundingsMap = new Map<string, Funding>();
  /** Background color for sports */
  @Input() sportsBackgroundColor = 'transparent';
  /** Text color for sports */
  @Input() sportsTextColor = 'black';
  /** Background color for tag */
  @Input() typesBackgroundColor = 'transparent';
  /** Text color for tag */
  @Input() typesTextColor = 'black';

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
