import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Funding} from "../model/funding.model";
import {environment} from "../../../../environments/environment";
import {AngularFirestore} from "@angular/fire/compat/firestore";

/**
 * Loads fundings via Firebase
 */
@Injectable({
  providedIn: 'root'
})
export class FundingFirestoreService {

  /** Fundings subject */
  fundingsSubject = new Subject<Funding>();

  /**
   * Constructor
   * @param firestore firestore
   */
  constructor(private firestore: AngularFirestore) {
  }

  /**
   * Fetches funding items via Firebase
   */
  fetchFundings() {
    this.firestore.collection("fundings").valueChanges().subscribe(documents => {
      documents.forEach((document: any) => {
        const funding = FundingFirestoreService.preProcessFunding(document as Funding);

        this.fundingsSubject.next(funding);
      });
    });
  }

  /**
   * Fetches funding item via Firebase
   */
  fetchFunding(id: string) {
    this.firestore.doc<Funding>(`fundings/${id}`).valueChanges().subscribe(document => {
      const funding = FundingFirestoreService.preProcessFunding(document as Funding);

      this.fundingsSubject.next(funding);
    });
  }

  //
  // Helpers
  //

  /**
   * Pre-processes funding item
   * @param funding funding item
   */
  private static preProcessFunding(funding: Funding): Funding {
    funding.sports = funding.sports.filter(sport => {
      return sport.length > 0;
    }).map(sport => {
      return sport.replace(/(^"|"$)/g, '').trim();
    }).filter(sport => {
      return sport.trim().length > 0;
    }).sort();

    funding.types = funding.types.filter(type => {
      return type.length > 0;
    }).map(type => {
      return type.replace(/(^"|"$)/g, '').trim();
    }).sort();
    funding.volume = +funding.volume;
    funding.image = `${environment.cmsUploadUrl}${funding.image.replace(/"/g, "")}`;

    return funding;
  }
}
