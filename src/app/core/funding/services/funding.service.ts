import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable, Subject} from "rxjs";
import {Funding} from "../model/funding";

interface Branch {
  name: string,
  commit: {
    sha: string,
    node_id: string,
    commit: {
      author: {
        "name": string,
        "email": string,
        "date": string,
      },
      "committer": {
        "name": string,
        "email": string,
        "date": string
      },
      "message": string,
      "tree": {
        "sha": string,
        "url": string,
      },
      "url": string,
      "comment_count": number,
      "verification": {
        "verified": boolean,
        "reason": string,
        "signature": {},
        "payload": {}
      }
    },
    url: string,
    html_url: string,
    comments_url: string,
    author: {
      login: string,
      id: number,
      node_id: string,
      avatar_url: string,
      gravatar_id: string,
      url: string,
      html_url: string,
      followers_url: string,
      following_url: string,
      gists_url: string,
      starred_url: string,
      subscriptions_url: string,
      organizations_url: string,
      repos_url: string,
      events_url: string,
      received_events_url: string,
      type: string,
      site_admin: boolean
    },
    committer: string,
    parents: {
      sha: string,
      url: string,
      html_url: string
    }[]
  },
  _links: {
    self: string,
    git: string,
    html: string,
  }
  protected: boolean,
  protection: {
    enabled: boolean
    required_status_checks: {
      enforcement_level: string,
      contexts: [],
      checks: []
    }
  },
  protectionUrl: string
}

interface Tree {
  sha: string,
  url: string,
  tree: {
    path: string,
    mode: string,
    type: string,
    sha: string,
    url: string,
  }[],
  truncated: boolean
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
  _links: {
    self: string,
    git: string,
    html: string,
  }
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
  _links: {
    self: string,
    git: string,
    html: string,
  }
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
    this.loadBranch(environment.cmsContentBranch).subscribe((branch: Branch) => {
      const commitSha = branch.commit.sha;

      this.loadTree(commitSha).subscribe((tree: Tree) => {
        const contentCommitSha = tree.tree.filter(item => {
          return item.path === environment.cmsContentPath
        })[0].sha;

        this.loadTree(contentCommitSha).subscribe((tree: Tree) => {
          tree.tree.forEach(item => {
              this.loadFileContent(`${environment.cmsContentPath}/${item.path}`).subscribe((itemContent: ItemContent) => {
                const content: string = atob(itemContent.content);
                const funding: Funding = this.parseContent(item.path, content);

                this.fundingsSubject.next(funding);
              });
            });
        });
      });
    });
  }

  //
  // Helpers
  //

  /**
   * Loads a branch
   * @param branch branch name
   */
  private loadBranch(branch: string): Observable<Branch> {
    return this.http.get<Branch>(`${environment.cmsBranchUrl}/${branch}`);
  }

  /**
   * Loads a tree
   * @param commitSha commit SHA
   */
  private loadTree(commitSha: string): Observable<Tree> {
    return this.http.get<Tree>(`${environment.cmsTreeUrl}/${commitSha}`);
  }

  /**
   * Loads a file
   * @param path file path
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
