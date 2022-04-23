import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";

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
 * Loads content from CMS
 */
@Injectable({
  providedIn: 'root'
})
export class ContentLoaderService {

  /**
   * Constructor
   * @param http http client
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Loads list of files of git repository
   */
  private loadCmsOverview(): Observable<CmsOverview> {
    return this.http.get<CmsOverview>(environment.cmsOverviewUrl);
  }

  /**
   * Loads content of a given file
   * @param path file name
   */
  private loadFileContent(path: string): Observable<ItemContent> {
    return this.http.get<ItemContent>(`${environment.cmsContentUrl}/${path}`);
  }

  /**
   * Loads items from CMS
   */
  loadItems(): Observable<any> {
    const items = new Subject<any>();

    this.loadCmsOverview().subscribe((cmsOverview: CmsOverview) => {
      cmsOverview.tree.forEach(item => {
        this.loadFileContent(item.path).subscribe((itemContent: ItemContent) => {
          items.next(atob(itemContent.content));
        });
      });
    });

    return items;
  }
}
