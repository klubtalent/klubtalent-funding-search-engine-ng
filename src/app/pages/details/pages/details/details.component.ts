import {Component, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {MaterialColorService} from '../../../../core/ui/services/material-color.service';
import {VibrantPalette} from '../../../../core/ui/model/vibrant-palette';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {Funding} from "../../../../core/funding/model/funding.model";
import {FundingService} from "../../../../core/funding/services/funding.service";
import {environment} from "../../../../../environments/environment";
import {HueType} from "../../../../core/ui/model/hue-type.enum";
import {MaterialIconService} from "../../../../core/ui/services/material-icon.service";
import {ContactBottomSheetComponent} from "../../components/contact-bottom-sheet/contact-bottom-sheet.component";

/**
 * Displays details page
 */
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  /** ID passed as an argument */
  id: string | null = "";

  /** Funding to be displayed */
  funding: Funding = new Funding();

  /** Map of fundings */
  fundingsMap: Map<string, Funding> = new Map<string, Funding>();

  /** Background color for sports */
  public sportsBackgroundColor = 'transparent';
  /** Text color for sport */
  public sportsTextColor = 'black';
  /** Background color for tag */
  public typesBackgroundColor = 'transparent';
  /** Text color for tag */
  public typesTextColor = 'black';
  /** Text color for volume */
  public volumeColor = 'transparent';

  /** List of icons to display sports */
  sportsIcons: string[] | undefined = [];
  /** List of icons to display types */
  typesIcons: string[] | undefined = [];

  /** Helper subject used to finish other subscriptions */
  public unsubscribeSubject = new Subject();

  /**
   * Constructor
   * @param bottomSheet bottom sheet
   * @param materialColorService material color service
   * @param materialIconService material icon service
   * @param fundingService funding service
   * @param route route
   * @param router router
   */
  constructor(private bottomSheet: MatBottomSheet,
              private materialColorService: MaterialColorService,
              private materialIconService: MaterialIconService,
              private fundingService: FundingService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init lifecycle phase
   */
  ngOnInit() {
    this.initializeSubscriptions();
    this.initializeMaterialColors();

    this.route.params.subscribe(() => {
      if (this.route.snapshot != null) {
        this.id = this.route.snapshot.paramMap.get('id');
        this.findEntities();
      }
    });
  }

  /**
   * Handles on-destroy lifecycle phase
   */
  ngOnDestroy() {
    this.unsubscribeSubject.next();
    this.unsubscribeSubject.complete();
  }

  //
  // Initialization
  //

  /**
   * Initializes subscriptions
   */
  private initializeSubscriptions() {
    this.fundingService.fundingsSubject.pipe(
      takeUntil(this.unsubscribeSubject),
      filter(value => value != null)
    ).subscribe(value => {
      this.onFundingsUpdated(value as Funding);
    });
  }

  /**
   * Initializes fundings
   * @param funding funding
   */
  private initializeFundings(funding: Funding) {
    this.fundingsMap.set(funding.id, funding);
    this.fundingsMap = new Map(this.fundingsMap);
  }

  /**
   * Initializes funding
   */
  private initializeFunding(fundingsMap: Map<string, Funding>) {
    if (this.id != null && fundingsMap.has(<string>this.id)) {
      this.funding = <Funding>fundingsMap.get(this.id);

      // if (this.funding.bannerUrl != null && this.funding.bannerUrl !== '') {
      //     this.getPalette(this.funding.bannerUrl).then(palette => {
      //         this.goalsBackgroundColor = this.getColor(palette.lightVibrant as Swatch).toString();
      //         this.competenciesBackgroundColor = this.getColor(palette.lightMuted as Swatch).toString();
      //     });
      // }
    } else {
      this.router.navigate(['/']);
    }
  }

  /**
   * Initializes material colors
   */
  private initializeMaterialColors() {
    this.sportsBackgroundColor = this.materialColorService.color(this.materialColorService.primaryPalette, HueType._300);
    this.sportsTextColor = this.materialColorService.contrast(this.materialColorService.primaryPalette, HueType._300);
    this.typesBackgroundColor = this.materialColorService.color(this.materialColorService.primaryPalette, HueType._100);
    this.typesTextColor = this.materialColorService.contrast(this.materialColorService.primaryPalette, HueType._100);

    this.volumeColor = this.materialColorService.contrast(this.materialColorService.primaryPalette, HueType._200);
  }

  /**
   * Initializes icons
   */
  private initializeIcons() {
    this.sportsIcons = this.funding?.sports.map(this.materialIconService.getSportsIcon);
  }

  //
  // Actions
  //

  /**
   * Handles click on menu item
   * @param menuItem menu item
   */
  onMenuItemClicked(menuItem: string) {
    switch (menuItem) {
      case 'back': {
        this.router.navigate(['/overview']);
        break;
      }
      default: {
        break;
      }
    }
  }

  /**
   * Handles click on contact button
   */
  onContactClicked() {
    this.bottomSheet.open(ContactBottomSheetComponent, {
      data: {
        url: this.funding.url,
        phone: this.funding.phone,
        mail: this.funding.mail,
      }
    });
  }

  /**
   * Handles fundings being loaded
   * @param funding funding
   */
  onFundingsUpdated(funding: Funding) {
    this.initializeFundings(funding);
    this.initializeFunding(this.fundingsMap);

    this.initializeIcons();
  }

  //
  // Storage
  //

  /**
   * Finds entities
   * @param forceReload force reload
   */
  private findEntities(forceReload = false) {
    if (environment.mock) {
      this.fundingService.mockFundings();
    } else {
      this.fundingService.fetchFundings();
    }
  }
}
