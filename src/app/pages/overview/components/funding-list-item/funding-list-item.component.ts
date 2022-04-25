import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Funding} from "../../../../core/funding/model/funding.model";
import {MaterialIconService} from "../../../../core/ui/services/material-icon.service";

/**
 * Displays funding list item
 */
@Component({
  selector: 'app-funding-list-item',
  templateUrl: './funding-list-item.component.html',
  styleUrls: ['./funding-list-item.component.scss']
})
export class FundingListItemComponent implements OnChanges {

  /** Project to be displayed */
  @Input() funding: Funding = new Funding();
  /** Background color for sports */
  @Input() sportsBackgroundColor = 'transparent';
  /** Text color for sport */
  @Input() sportsTextColor = 'black';
  /** Background color for tag */
  @Input() typesBackgroundColor = 'transparent';
  /** Text color for tag */
  @Input() typesTextColor = 'black';

  /** List of icons to display sports */
  sportsIcons: string[] | undefined = [];
  /** Whether or not the text is collapsed */
  sportsCollapsedText = true;
  /** List of icons to display types */
  typesIcons: string[] | undefined = [];

  /**
   * Constrcutor
   * @param materialIconService Material icon service
   */
  constructor(private materialIconService: MaterialIconService) {
  }

  /**
   * Handles on-change lifecycle phase
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.initializeIcons();
  }

  //
  // Initial
  //

  /**
   * Initializes icons
   */
  private initializeIcons() {
    this.sportsIcons = this.funding?.sports.map(this.materialIconService.getSportsIcon);
  }
}
