import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable, Subject} from "rxjs";
import {Funding} from "../model/funding.model";

/**
 * Represents a git branch
 */
interface Branch {
  /** Name */
  name: string,
  /** Commit */
  commit: {
    /** SHA */
    sha: string,
    /** Node ID */
    node_id: string,
    /** Commit */
    commit: {
      /** Author */
      author: {
        /** Name */
        "name": string,
        /** E-Mail */
        "email": string,
        /** Date */
        "date": string,
      },
      /** Committer */
      "committer": {
        /** Name */
        "name": string,
        /** E-Mail */
        "email": string,
        /** Date */
        "date": string,
      },
      /** Message */
      "message": string,
      /** Tree */
      "tree": {
        /** SHA */
        "sha": string,
        /** URL */
        "url": string,
      },
      /** URL */
      "url": string,
      /** Comment count */
      "comment_count": number,
      /** Verification */
      "verification": {
        /** Verified */
        "verified": boolean,
        /** Reason */
        "reason": string,
        /** Signature */
        "signature": {},
        /** Payload */
        "payload": {}
      }
    },
    /** URL */
    url: string,
    /** HTML URL */
    html_url: string,
    /** Comments URL */
    comments_url: string,
    /** Author */
    author: {
      /** Login */
      login: string,
      /** ID */
      id: number,
      /** Node ID */
      node_id: string,
      /** Avatar URL */
      avatar_url: string,
      /** Gravatar ID */
      gravatar_id: string,
      /** URL */
      url: string,
      /** HTML URL */
      html_url: string,
      /** Followers URL */
      followers_url: string,
      /** Following URL */
      following_url: string,
      /** Gists URL */
      gists_url: string,
      /** Starred URL */
      starred_url: string,
      /** Subscriptions URL */
      subscriptions_url: string,
      /** Organizations URL */
      organizations_url: string,
      /** Repos URL */
      repos_url: string,
      /** Events URL */
      events_url: string,
      /** Received events URL */
      received_events_url: string,
      /** Type */
      type: string,
      /** Site admin */
      site_admin: boolean
    },
    /** Committer */
    committer: string,
    /** Parents */
    parents: {
      /** SHA */
      sha: string,
      /** URL */
      url: string,
      /** HTML URL */
      html_url: string
    }[]
  },
  /** Links */
  _links: {
    /** Self */
    self: string,
    /** Git */
    git: string,
    /** HTML */
    html: string,
  }
  /** Protected */
  protected: boolean,
  /** Protection */
  protection: {
    /** Enabled */
    enabled: boolean
    /** Required status checks */
    required_status_checks: {
      /** Enforcement level */
      enforcement_level: string,
      /** Contexts */
      contexts: [],
      /** Checks */
      checks: []
    }
  },
  /** Protection URL */
  protectionUrl: string
}

/**
 * Represents git tree
 */
interface Tree {
  /** SHA */
  sha: string,
  /** URL */
  url: string,
  /** Tree */
  tree: {
    /** Path */
    path: string,
    /** Mode */
    mode: string,
    /** Type */
    type: string,
    /** SHA */
    sha: string,
    /** URL */
    url: string,
  }[],
  /** Truncated */
  truncated: boolean
}

/**
 * Represents git item content
 */
interface ItemContent {
  /** Name */
  name: string,
  /** Path */
  path: string,
  /** SHA */
  sha: string,
  /** Size */
  size: number,
  /** URL */
  url: string,
  /** HTML URL */
  html_url: string,
  /** Git URL */
  git_url: string,
  /** Download URL */
  download_url: string,
  /** Type */
  type: string,
  /** Content */
  content: string,
  /** Encoding */
  encoding: string,
  /** Links */
  _links: {
    /** Self */
    self: string,
    /** Git */
    git: string,
    /** HTML */
    html: string,
  }
}


/**
 * Loads fundings via Github API
 */
@Injectable({
  providedIn: 'root'
})
export class FundingGithubService {

  /** Fundings subject */
  fundingsSubject = new Subject<Funding>();

  /**
   * Constructor
   * @param http http client
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Fetches funding items via Github API
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
              const content: string = FundingGithubService.decode(itemContent.content);
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
        if (key === 'sports') {
          funding.sports = value.replace(/[\[\]']+/g, '')
            .split(",")
            .map(FundingGithubService.replaceBrackets)
            .filter(FundingGithubService.isNotEmpty)
            .map(value => value.trim());
        }
        if (key === 'types') {
          funding.types = value.replace(/[\[\]']+/g, '')
            .split(",")
            .map(FundingGithubService.replaceBrackets)
            .filter(FundingGithubService.isNotEmpty)
            .map(value => value.trim());
        }
        if (key === 'volume') {
          funding.volume = +value;
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

  /**
   * Decodes base64 into unicode string
   * @see https://stackoverflow.com/a/30106551
   * @param value base64 value
   */
  private static decode(value: string) {
    return decodeURIComponent(Array.prototype.map.call(atob(value), function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''));
  }
}
