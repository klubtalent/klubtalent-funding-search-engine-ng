import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable, Subject} from "rxjs";
import {Funding} from "../model/funding";

interface CmsOverview {
  sha: string,
  url: string,
  tree: Item[],
  truncated: boolean
}

interface Item {
  path: string,
  mode: string,
  type: string,
  sha: string,
  size: number,
  url: string,
}

interface Links {
  self: string,
  git: string,
  html: string,
}

interface ItemContent {
  name: string,
  path: string,
  sha: string,
  size: number,
  url: string,
  html_url: string,
  git_url: string,
  download_url: string,
  type: string,
  content: string,
  encoding: string,
  _links: Links,
}

/**
 * Loads funding from CMS
 */
@Injectable({
  providedIn: 'root'
})
export class FundingService {

  fundingsSubject = new Subject<Funding>();

  /**
   * Constructor
   * @param http http client
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Fetches funding items from CMS
   */
  fetchFundings() {
    this.loadCmsOverview().subscribe((cmsOverview: CmsOverview) => {
      cmsOverview.tree.forEach(item => {
        this.loadFileContent(item.path).subscribe((itemContent: ItemContent) => {
          const content: string = atob(itemContent.content);
          const funding: Funding = this.parseContent(content);

          this.fundingsSubject.next(funding);
        });
      });
    });
  }

  //
  // Helpers
  //

  /**
   * Loads list of files of git repository
   */
  private loadCmsOverview(): Observable<CmsOverview> {
    return this.http.get<CmsOverview>(environment.cmsOverviewUrl);
  }

  /**
   * Loads funding of a given file
   * @param path file name
   */
  private loadFileContent(path: string): Observable<ItemContent> {
    return this.http.get<ItemContent>(`${environment.cmsContentUrl}/${path}`);
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
   * @param content funding string
   */
  private parseContent(content: string): Funding {
    const funding = new Funding();
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
        if (key === 'sport') {
          funding.sport = value.replace(/[\[\]']+/g, '')
            .split(",")
            .map(FundingService.replaceBrackets)
            .filter(FundingService.isNotEmpty);
        }
        if (key === 'type') {
          funding.type = value.replace(/[\[\]']+/g, '')
            .split(",")
            .map(FundingService.replaceBrackets)
            .filter(FundingService.isNotEmpty);
        }
        if (key === 'volume') {
          funding.volume = +value;
        }
        if (key === 'text') {
          funding.text = value.replace(/['"]+/g, '');
        }
      }
    });

    return funding;
  }
}
