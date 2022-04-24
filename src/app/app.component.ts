import {Component} from '@angular/core';

/**
 * Displays app component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /** Default app theme */
  public themeClass = 'klubtalent-blue-theme';
}
