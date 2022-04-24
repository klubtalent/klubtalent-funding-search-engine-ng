import {Component, Input} from '@angular/core';
import {Funding} from "../../../../core/funding/model/funding";

/**
 * Displays funding overiew
 */
@Component({
  selector: 'app-funding-list-item',
  templateUrl: './funding-list-item.component.html',
  styleUrls: ['./funding-list-item.component.scss']
})
export class FundingListItemComponent {

  /** Project to be displayed */
  @Input() funding: Funding | undefined;
}
