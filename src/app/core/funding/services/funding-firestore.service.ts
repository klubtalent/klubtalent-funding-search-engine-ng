import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {Funding} from "../model/funding.model";
import {environment} from "../../../../environments/environment";
import {collection, doc, DocumentData, Firestore, getDoc, getDocs, query} from "@angular/fire/firestore/lite";

/**
 * Loads fundings via Firebase
 */
@Injectable({
  providedIn: 'root'
})
export class FundingFirestoreService {

  /** Collection name */
  collectionName = "fundings";

  /** Fundings subject */
  fundingsSubject = new Subject<Funding[]>();

  /**
   * Constructor
   * @param firestore firestore
   */
  constructor(private firestore: Firestore) {
  }

  /**
   * Fetches funding items via Firebase
   */
  fetchFundings() {
    // return onSnapshot(query(collection(this.firestore, this.collectionName)),
    //   (querySnapshot) => {
    //     const fundings: DocumentData[] = [];
    //     querySnapshot.forEach((doc) => {
    //       fundings.push(doc.data());
    //       fundings.map(funding => {
    //         FundingFirestoreService.preProcessFunding(funding as Funding);
    //       })
    //     });
    //     this.fundingsSubject.next(fundings as Funding[]);
    //   });

    getDocs(query(collection(this.firestore, this.collectionName)))
      .then((querySnapshot) => {
        const fundings: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
          fundings.push(doc.data());
        });
        this.fundingsSubject.next(fundings as Funding[]);
      });
  }

  /**
   * Fetches funding item via Firebase
   */
  fetchFunding(id: string) {
    // return onSnapshot(doc(this.firestore, this.collectionName, id), (doc) => {
    //   this.fundingsSubject.next([doc.data() as Funding]);
    // });

    getDoc(doc(this.firestore, this.collectionName, id)).then((querySnapshot) => {
      this.fundingsSubject.next([querySnapshot.data() as Funding]);
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
