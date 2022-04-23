import {Component, OnInit} from '@angular/core';
import {ContentLoaderService} from "./services/content-loader.service";
import {Funding} from "./model/funding";

/**
 * Displays app component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  /** Default app theme */
  public themeClass = 'klubtalent-blue-theme';

  /**
   * Constructor
   * @param contentLoaderService content loader service
   */
  constructor(private contentLoaderService: ContentLoaderService) {
  }

  /**
   * Handles on-init lifecycle phase
   */
  ngOnInit() {
    this.contentLoaderService.loadFundingItems().subscribe((funding: Funding) => {
      //TODO Implement
    });
  }
}
