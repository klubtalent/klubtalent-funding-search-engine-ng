import {Injectable} from '@angular/core';
import {collection, doc, Firestore, getDoc, getDocs} from "@angular/fire/firestore";
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
        const funding = document as Funding;
        funding.sports.map(sport => {
          return sport.replace(/(^"|"$)/g, '').trim();
        });
        funding.types.map(type => {
          return type.replace(/(^"|"$)/g, '').trim();
        });
        funding.image = `${environment.cmsUploadUrl}${funding.image.replace(/"/g, "")}`;

        this.fundingsSubject.next(funding);
      });
    });
  }

  /**
   * Fetches funding item via Firebase
   */
  fetchFunding(id: string) {
    this.firestore.doc<Funding>(`fundings/${id}`).valueChanges().subscribe(document => {
        const funding = document as Funding;
        funding.sports.map(sport => {
          return sport.replace(/(^"|"$)/g, '').trim();
        });
        funding.types.map(type => {
          return type.replace(/(^"|"$)/g, '').trim();
        });
        funding.image = `${environment.cmsUploadUrl}${funding.image.replace(/"/g, "")}`;

        this.fundingsSubject.next(funding);
    });
  }
}
