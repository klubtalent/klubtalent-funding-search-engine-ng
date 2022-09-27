import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {Subject} from "rxjs";
import {Funding} from "../model/funding.model";

/**
 * Mock fundings
 */
@Injectable({
  providedIn: 'root'
})
export class FundingMockService {

  /** Fundings subject */
  fundingsSubject = new Subject<Funding[]>();

  /**
   * Fetches funding items via Github API
   */
  fetchFundings() {
    const content1 = '+++\n' +
      'image = "/uploads/screenshot-2022-04-24-at-10-48-52.png"\n' +
      'name = "Lorem Ipsum Funding"\n' +
      'region = "Berlin"\n' +
      'sports = ["Basketball"]\n' +
      'subject = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."\n' +
      'types = ["Ausrüstung"]\n' +
      'volume = 10000\n' +
      'url = "https://klubtalent.org"\n' +
      'phone = "+4903555"\n' +
      'mail = "kontakt@klubtalent.org"\n\n' +
      '+++';
    const funding1: Funding = this.parseContent("lorem-ipsum.md", content1);

    const content2 = '+++\n' +
      'image = "/uploads/screenshot-2022-04-24-at-17-06-12.png"\n' +
      'name = "Ipsum Lorem Funding"\n' +
      'region = "Ingolstadt"\n' +
      'sports = ["Fußball","Yoga"]\n' +
      'subject = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."\n' +
      'types = ["Ausrüstung", "Beratung"]\n' +
      'volume = 20000\n' +
      'url = "https://klubtalent.org"\n' +
      'phone = "+4903555"\n' +
      'mail = "kontakt@klubtalent.org"\n\n' +
      '+++';
    const funding2: Funding = this.parseContent("ipsum-lorem.md", content2);

    this.fundingsSubject.next([funding1, funding2]);
  }


  /**
   * Removes square brackets from given value
   * @param value value
   */
  private static replaceBrackets(value: string) {
    return value.replace(/['"]+/g, '');
  }

  /**
   * Checks if a value is not empty
   * @param value value
   */
  private static isNotEmpty(value: string) {
    return value.length > 0;
  }

  /**
   * Parses funding item from funding string
   * @param id funding ID
   * @param content funding string
   */
  private parseContent(id: string, content: string): Funding {
    const funding = new Funding();

    funding.id = id;

    content.split("\n").forEach((line: string) => {
      const lineItems = line.split("=");

      if (lineItems.length === 2) {
        const key = lineItems[0].trim();
        const value = lineItems[1].trim();

        if (key === 'name') {
          funding.name = value.replace(/['"]+/g, '');
        }
        if (key === 'region') {
          funding.region = value.replace(/['"]+/g, '');
        }
        if (key === 'sports') {
          funding.sports = value.replace(/[\[\]']+/g, '')
            .split(",")
            .map(FundingMockService.replaceBrackets)
            .filter(FundingMockService.isNotEmpty)
            .map(value => value.trim());
        }
        if (key === 'type') {
          funding.types = value.replace(/[\[\]']+/g, '')
            .split(",")
            .map(FundingMockService.replaceBrackets)
            .filter(FundingMockService.isNotEmpty)
            .map(value => value.trim());
        }
        if (key === 'volume') {
          funding.volume = +value;
        }
        if (key === 'subject') {
          funding.subject = value.replace(/['"]+/g, '');
        }
        if (key === 'image') {
          funding.image = `${environment.cmsUploadUrl}${value.replace(/"/g, "")}`;
        }
        if (key === 'url') {
          funding.url = value.replace(/['"]+/g, '');
        }
        if (key === 'phone') {
          funding.phone = value.replace(/['"]+/g, '');
        }
        if (key === 'mail') {
          funding.mail = value.replace(/['"]+/g, '');
        }
      }
    });

    return funding;
  }
}
