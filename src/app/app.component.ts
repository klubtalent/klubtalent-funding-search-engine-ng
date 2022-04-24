import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {MaterialIconService} from "./core/ui/services/material-icon.service";
import {DomSanitizer} from "@angular/platform-browser";

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
   * @param iconRegistry icon registry
   * @param materialIconService material icon service
   * @param sanitizer sanitizer
   */
  constructor(private iconRegistry: MatIconRegistry,
              private materialIconService: MaterialIconService,
              private sanitizer: DomSanitizer) {
  }

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init lifecycle phase
   */
  ngOnInit() {
    this.materialIconService.initializeIcons(this.iconRegistry, this.sanitizer);
  }
}
