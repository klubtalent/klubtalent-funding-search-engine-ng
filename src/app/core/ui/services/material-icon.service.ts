import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

/**
 * Handles Material icons
 */
@Injectable({
  providedIn: 'root'
})
export class MaterialIconService {

  /**
   * Initializes icons
   *
   * @param iconRegistry icon registry
   * @param sanitizer sanitizer
   */
  public initializeIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('badminton', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/badminton.svg'));
    iconRegistry.addSvgIcon('baseball', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/baseball.svg'));
    iconRegistry.addSvgIcon('basketball', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/basketball.svg'));
    iconRegistry.addSvgIcon('biathlon', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/biathlon.svg'));
    iconRegistry.addSvgIcon('bike', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/bike.svg'));
    iconRegistry.addSvgIcon('boxing-glove', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/boxing-glove.svg'));
    iconRegistry.addSvgIcon('carabiner', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/carabiner.svg'));
    iconRegistry.addSvgIcon('cricket', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/cricket.svg'));
    iconRegistry.addSvgIcon('curling', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/curling.svg'));
    iconRegistry.addSvgIcon('fencing', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/fencing.svg'));
    iconRegistry.addSvgIcon('football', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/football.svg'));
    iconRegistry.addSvgIcon('golf', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/golf.svg'));
    iconRegistry.addSvgIcon('handball', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/handball.svg'));
    iconRegistry.addSvgIcon('hockey-sticks', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/hockey-sticks.svg'));
    iconRegistry.addSvgIcon('karate', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/karate.svg'));
    iconRegistry.addSvgIcon('kayaking', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/kayaking.svg'));
    iconRegistry.addSvgIcon('racquetball', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/racquetball.svg'));
    iconRegistry.addSvgIcon('rowing', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/rowing.svg'));
    iconRegistry.addSvgIcon('rugby', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/rugby.svg'));
    iconRegistry.addSvgIcon('run', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/run.svg'));
    iconRegistry.addSvgIcon('skate', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/skate.svg'));
    iconRegistry.addSvgIcon('skateboarding', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/skateboarding.svg'));
    iconRegistry.addSvgIcon('soccer', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/soccer.svg'));
    iconRegistry.addSvgIcon('swim', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/swim.svg'));
    iconRegistry.addSvgIcon('table-tennis', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/table-tennis.svg'));
    iconRegistry.addSvgIcon('tennis', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/tennis.svg'));
    iconRegistry.addSvgIcon('volleyball', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/volleyball.svg'));
    iconRegistry.addSvgIcon('yoga', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/yoga.svg'));
  }
}