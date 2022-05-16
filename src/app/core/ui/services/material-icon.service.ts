import {Injectable} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

/**
 * Handles material icons
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
    iconRegistry.addSvgIcon('arrow-left', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/arrow-left.svg'));

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

    iconRegistry.addSvgIcon('currency-eur', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/currency-eur.svg'));
    iconRegistry.addSvgIcon('map-marker-outline', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/map-marker-outline.svg'));
    iconRegistry.addSvgIcon('search', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/magnify.svg'));
    iconRegistry.addSvgIcon('filter-off-outline', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/filter-off-outline.svg'));

    iconRegistry.addSvgIcon('web', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/web.svg'));
    iconRegistry.addSvgIcon('phone', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/phone.svg'));
    iconRegistry.addSvgIcon('email-outline', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/email-outline.svg'));

    iconRegistry.addSvgIcon('clipboard-check-outline', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/clipboard-check-outline.svg'));
    iconRegistry.addSvgIcon('account-group', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/account-group.svg'));
    iconRegistry.addSvgIcon('information-outline', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/information-outline.svg'));
    iconRegistry.addSvgIcon('cash-plus', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/cash-plus.svg'));
    iconRegistry.addSvgIcon('cash-check', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/cash-check.svg'));
    iconRegistry.addSvgIcon('clock-alert-outline', sanitizer.bypassSecurityTrustResourceUrl('assets/material-icons/clock-alert-outline.svg'));
  }

  /**
   * Retrieves icon
   * @param value value
   */
  getSportsIcon(value: string) {
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
      case "Hockey": return "hockey-sticks";
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
      default: return "";
    }
  }

  /**
   * Retrieves icon
   * @param value value
   */
  getTypesIcon(value: string) {
    switch (value) {
      default: return "";
    }
  }
}
