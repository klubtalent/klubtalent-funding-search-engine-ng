import {Component, Input} from '@angular/core';

/**
 * Displays logo
 */
@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.svg',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  /** Whether to display first letter */
  @Input() firstLetter = true;
  /** Whether to display all but first letter */
  @Input() otherLetters = true;
}
