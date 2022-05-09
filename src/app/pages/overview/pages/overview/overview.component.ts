import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Subject} from 'rxjs';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {Funding} from "../../../../core/funding/model/funding.model";
import {filter, takeUntil} from "rxjs/operators";
import {MaterialColorService} from "../../../../core/ui/services/material-color.service";
import {HueType} from "../../../../core/ui/model/hue-type.enum";
import {environment} from "../../../../../environments/environment";
import {FilterService} from "../../../../core/funding/services/filter.service";
import {SelectableSport} from "../../../../core/funding/model/selectable-sport.model";
import {SelectableType} from "../../../../core/funding/model/selectable-type.model";
import {MaterialIconService} from "../../../../core/ui/services/material-icon.service";
import {FundingFirestoreService} from "../../../../core/funding/services/funding-firestore.service";
import {FundingMockService} from "../../../../core/funding/services/funding-mock.service";

/**
 * Displays overview page
 */
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [
    trigger('searchPanelAnimation', [
      state('panel-open', style({
        opacity: '1',
        overflow: 'hidden',
        height: '*'
      })),
      state('panel-closed', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px'
      })),
      transition('* => *', animate('400ms ease-in-out'))
    ])
  ]
})
export class OverviewComponent implements OnInit, OnChanges, OnDestroy {

  /** Map of fundings */
  public fundingsMap = new Map<string, Funding>();
  /** Map of filtered fundings */
  public fundingsMapFiltered = new Map<string, Funding>();

  /** Map of sports */
  selectableSportsMap = new Map<string, SelectableSport>();
  /** Map of types */
  selectableTypesMap = new Map<string, SelectableType>();

  /** Filter values for sports */
  sportsValuesMap: Map<string, [string, boolean, boolean]> = new Map<string, [string, boolean, boolean]>();
  /** Filter values for types */
  typesValuesMap: Map<string, [string, boolean, boolean]> = new Map<string, [string, boolean, boolean]>();
  /** Filter value for volume */
  volumeLimit = 0;

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

  /** State of the logo */
  logoState = 'logo-open';
  /** State of the search panel */
  searchPanelState = 'panel-closed';

  /** Helper subject used to finish other subscriptions */
  public unsubscribeSubject = new Subject();

  /**
   * Constructor
   * @param dialog dialog
   * @param filterService filter service
   * @param fundingFirestoreService funding Firestore service
   * @param fundingMockService funding mock service
   * @param iconRegistry icon registry
   * @param materialColorService material color service
   * @param materialIconService material icon service
   * @param router router
   * @param sanitizer sanitizer
   */
  constructor(private dialog: MatDialog,
              private filterService: FilterService,
              private fundingFirestoreService: FundingFirestoreService,
              private fundingMockService: FundingMockService,
              private iconRegistry: MatIconRegistry,
              private materialColorService: MaterialColorService,
              private materialIconService: MaterialIconService,
              private router: Router,
              private sanitizer: DomSanitizer) {
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
    this.findEntities();
  }

  /**
   * Handles on-changes lifecycle phase
   */
  ngOnChanges(changes: SimpleChanges) {
    this.initializeMaterialColors();
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
    this.fundingFirestoreService.fundingsSubject.pipe(
      takeUntil(this.unsubscribeSubject),
      filter(value => value != null)
    ).subscribe(value => {
      this.onFundingsUpdated(value as Funding);
    });

    this.fundingMockService.fundingsSubject.pipe(
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
   * Initializes sports
   * @param funding funding
   */
  private initializeSports(funding: Funding) {
    funding.sports.forEach(sport => {
      this.selectableSportsMap.set(sport, new SelectableSport(sport));
    });

    this.selectableSportsMap = new Map(this.selectableSportsMap);
  }

  /**
   * Initializes types
   * @param funding funding
   */
  private initializeTypes(funding: Funding) {
    funding.types.forEach(type => {
      this.selectableTypesMap.set(type, new SelectableType(type));
    });

    this.selectableTypesMap = new Map(this.selectableTypesMap);
  }

  /**
   * Initializes material colors
   */
  private initializeMaterialColors() {
    this.sportsBackgroundColor = this.materialColorService.color(this.materialColorService.primaryPalette, HueType._200);
    this.sportsTextColor = this.materialColorService.contrast(this.materialColorService.primaryPalette, HueType._200);
    this.typesBackgroundColor = this.materialColorService.color(this.materialColorService.primaryPalette, HueType._100);
    this.typesTextColor = this.materialColorService.contrast(this.materialColorService.primaryPalette, HueType._100);

    this.volumeColor = this.materialColorService.contrast(this.materialColorService.primaryPalette, HueType._200);
  }

  /**
   * Initializes fundings based on filter
   * @param fundingsMap fundings map
   */
  private initializeFundingsFiltered(fundingsMap: Map<string, Funding>) {
    const fundingsMapFiltered = new Map<string, Funding>();

    Array.from(fundingsMap.values()).filter(funding => {
      return this.filterService.filterFunding(funding, this.selectableSportsMap, this.selectableTypesMap, this.volumeLimit);
    }).forEach(funding => {
      fundingsMapFiltered.set(funding.id, funding);
    });

    // Re-instantiate to trigger change detection
    this.fundingsMapFiltered = new Map(fundingsMapFiltered);
  }

  /**
   * Initializes filter
   */
  private initializeFilters() {
    this.selectableSportsMap.forEach((value: SelectableSport, _: string) => {
      value.disabled = false;
      value.selected = false;
    });
    this.selectableTypesMap.forEach((value: SelectableType, _: string) => {
      value.disabled = false;
      value.selected = false;
    });

    // Transform selectable maps to value maps
    this.selectableSportsMap.forEach((value: SelectableSport, _: string) => {
      this.sportsValuesMap.set(value.name, [
        this.materialIconService.getSportsIcon(value.name),
        value.disabled,
        value.selected
      ]);
    });
    this.selectableTypesMap.forEach((value: SelectableType, _: string) => {
      this.typesValuesMap.set(value.name, [
        this.materialIconService.getTypesIcon(value.name),
        value.disabled, value.selected
      ]);
    });

    // Re-instantiate to trigger change detection
    this.sportsValuesMap = new Map(this.sportsValuesMap);
    this.typesValuesMap = new Map(this.typesValuesMap);

    this.volumeLimit = this.getVolumeMin();
  }

  //
  // Events
  //

  /**
   * Handles fundings being loaded
   * @param funding funding
   */
  onFundingsUpdated(funding: Funding) {
    this.initializeFundings(funding);
    this.initializeSports(funding);
    this.initializeTypes(funding);

    this.initializeFilters();
    this.initializeFundingsFiltered(this.fundingsMap);
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
      case 'filter': {
        this.logoState = this.logoState === 'logo-open' ? 'logo-closed' : 'logo-open';
        this.searchPanelState = this.searchPanelState === 'panel-open' ? 'panel-closed' : 'panel-open';
        break;
      }
      case 'filter-reset': {
        this.initializeFilters();
        this.initializeFundingsFiltered(this.fundingsMap);
        break;
      }
      default: {
        break;
      }
    }
  }

  /**
   * Handles funding being clicked
   * @param event funding name
   */
  onFundingClicked(event: string) {
    this.router.navigate([`/details/${event}`]);
  }

  /**
   * Handles selection of sports
   * @param event map of sports
   */
  onSportsSelected(event: Map<string, [string, boolean, boolean]>) {

    this.selectableSportsMap.forEach((value: SelectableSport, _: string) => {
      // @ts-ignore
      value.selected = event.has(value.name) && event.get(value.name)[1];
    });

    this.initializeFundingsFiltered(this.fundingsMap);
  }

  /**
   * Handles selection of types
   * @param event map of types
   */
  onTypesSelected(event: Map<string, [string, boolean, boolean]>) {
    this.selectableTypesMap.forEach((value: SelectableType, _: string) => {
      // @ts-ignore
      value.selected = event.has(value.name) && event.get(value.name)[1];
    });

    this.initializeFundingsFiltered(this.fundingsMap);
  }

  /**
   * Handles selection of a volume limit
   * @param event volume limit
   */
  onVolumeLimitSelected(event: number) {
    this.volumeLimit = event;
    this.initializeFundingsFiltered(this.fundingsMap);
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
      this.fundingMockService.fetchFundings();
    } else {
      this.fundingFirestoreService.fetchFundings();
    }
  }

  //
  // Helpers
  //

  /**
   * Gets maximum volume
   */
  getVolumeMax(): number {
    let volumeMax = Number.MIN_VALUE;
    this.fundingsMap.forEach((value: Funding, _: string) => {
      if (value.volume > volumeMax) {
        volumeMax = value.volume;
      }
    });

    return volumeMax;
  }

  /**
   * Gets minimum volume
   */
  getVolumeMin(): number {
    let volumeMin = Number.MAX_VALUE;
    this.fundingsMap.forEach((value: Funding, _: string) => {
      if (value.volume < volumeMin) {
        volumeMin = value.volume;
      }
    });

    return volumeMin;
  }
}
