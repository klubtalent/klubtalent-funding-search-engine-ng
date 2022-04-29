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

  @Input() firstLetter = true;
  @Input() otherLetters = true;
}
