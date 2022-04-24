import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {Funding} from "../../../../core/funding/model/funding";
import {FundingService} from "../../../../core/funding/services/funding.service";
import {filter, takeUntil} from "rxjs/operators";

/**
 * Displays overview page
 */
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [
    trigger('searchPanelAnimation', [
      state('open', style({
        opacity: '1',
        overflow: 'hidden',
        height: '*'
      })),
      state('closed', style({
        opacity: '0',
        overflow: 'hidden',
        height: '0px'
      })),
      transition('* => *', animate('400ms ease-in-out'))
    ])
  ]
})
export class OverviewComponent implements OnInit, OnDestroy {

  /** Map of fundings */
  public fundingsMap = new Map<string, Funding>();

  /** State of the search panel */
  searchPanelState = 'closed';

  /** Helper subject used to finish other subscriptions */
  public unsubscribeSubject = new Subject();

  /**
   * Constructor
   * @param dialog dialog
   * @param fundingService funding service
   * @param iconRegistry icon registry
   * @param router router
   * @param sanitizer sanitizer
   */
  constructor(private dialog: MatDialog,
              private fundingService: FundingService,
              private iconRegistry: MatIconRegistry,
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
    this.findEntities();
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
   */
  private initializeFundings(funding: Funding) {
    this.fundingsMap.set(funding.id, funding);
    this.fundingsMap = new Map(this.fundingsMap);
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
  }

  //
  // Actions
  //

  /**
   * Handles funding being clicked
   * @param event funding name
   */
  onFundingClicked(event: string) {
    // TODO
  }

  //
  // Storage
  //

  /**
   * Finds entities
   * @param forceReload force reload
   */
  private findEntities(forceReload = false) {
    this.fundingService.fetchFundings();
  }
}
