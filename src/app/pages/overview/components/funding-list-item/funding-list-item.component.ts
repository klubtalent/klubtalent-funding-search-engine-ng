import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Funding} from "../../../../core/funding/model/funding";

/**
 * Displays funding list item
 */
@Component({
  selector: 'app-funding-list-item',
  templateUrl: './funding-list-item.component.html',
  styleUrls: ['./funding-list-item.component.scss']
})
export class FundingListItemComponent implements OnChanges{

  /** Project to be displayed */
  @Input() funding: Funding = new Funding();
  /** Background color for sport */
  @Input() sportBackgroundColor = 'transparent';
  /** Text color for sport */
  @Input() sportTextColor = 'black';
  /** Background color for tag */
  @Input() typeBackgroundColor = 'transparent';
  /** Text color for tag */
  @Input() typeTextColor = 'black';

  /** List of icons to display sport */
  sportIcons: string[] | undefined = [];
  /** Whether or not the text is collapsed */
  sportCollapsedText = true;
  /** List of icons to display type */
  typeIcons: string[] | undefined = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.initializeIcons();
  }


  //
  // Initial
  //

  static getIcon(value: string) {

    console.log(`FOO value ${value}`);

    switch (value) {
      case "Badminton": return "badminton";
      case "Baseball": return "baseball";
      case "Basketball": return "basketball";
      case "Beachvolleyball": return "volleyball";
      case "Biathlon": return "biathlon";
      case "Boxen": return "boxing-glove";
      case "Curling": return "curling";
      case "Eislaufen": return "skate";
      case "Fechten": return "fencing";
      case "Football": return "football";
      case "Fußball": return "soccer";
      case "Golf": return "golf";
      case "Handball": return "handball";
      case "Hockey": return "hockey";
      case "Joggen": return "run";
      case "Kampfsport": return "karate";
      case "Karate": return "karate";
      case "Kayakfahren": return "kayaking";
      case "Kickboxen": return "boxing-glove";
      case "Klettern": return "carabiner";
      case "Kricket": return "cricket";
      case "Laufen": return "run";
      case "Radfahren": return "bike";
      case "Rudern": return "rowing";
      case "Rugby": return "rugby";
      case "Squash": return "racquetball";
      case "Schwimmen": return "swim";
      case "Skateboarden": return "skateboarding";
      case "Tennis": return "tennis";
      case "Tischtennis": return "table-tennis";
      case "Volleyball": return "volleyball";
      case "Yoga": return "yoga";
    }

    return "";
  }

  private initializeIcons() {
    this.sportIcons = this.funding?.sport.map(FundingListItemComponent.getIcon);
    console.log(`FOO this.sportIcons ${JSON.stringify(this.sportIcons)}`);
  }
}
