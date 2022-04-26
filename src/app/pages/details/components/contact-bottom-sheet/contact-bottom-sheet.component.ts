import {Component, Inject, OnInit} from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';

/**
 * Displays bottom sheet with partner contact information
 */
@Component({
  selector: 'app-contact-bottom-sheet',
  templateUrl: './contact-bottom-sheet.component.html',
  styleUrls: ['./contact-bottom-sheet.component.scss']
})
export class ContactBottomSheetComponent implements OnInit {

  /** Project partner's phone number */
  phone: string = "";
  /** Project partner's email address */
  mail: string = "";

  /**
   * Constructor
   * @param bottomSheetRef bottom sheet reference
   * @param data data
   */
  constructor(private bottomSheetRef: MatBottomSheetRef<ContactBottomSheetComponent>,
              @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
  }

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init lifecycle phase
   */
  ngOnInit() {
    this.initializeData();
  }

  //
  // Initialization
  //

  /**
   * Initializes data
   */
  private initializeData() {
    this.phone = this.data.phone;
    this.mail = this.data.mail;
  }

  /**
   * Actions
   */

  /**
   * Handles click on call button
   * @param phone phone number
   */
  onCallButtonClicked(phone: string) {
    window.location.href = `tel:${phone}`;
  }

  /**
   * Handles click on mail button
   * @param mail mail address
   */
  onMailButtonClicked(mail: string) {
    window.location.href = `mailto:${mail}?subject=${escape('Anfrage BNE')}`;
  }
}
