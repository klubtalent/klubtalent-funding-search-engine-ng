/**
 * Represents funding
 */
export class Funding {

  /** ID */
  id: string = '';
  /** Name */
  name: string = '';
  /** Image */
  image: string = '';

  /** Subject */
  subject: string = '';
  /** Target */
  target: string = '';
  /** Hints */
  hints: string = '';
  /** Equity */
  equity: string = '';
  /** Financing */
  financing: string = '';
  /** Dealine */
  deadline: string = '';

  /** Region */
  region: string = '';
  /** Category */
  category: string = '';

  /** Sports */
  sports: string[] = [];
  /** Types */
  types: string[] = [];
  /** Volume */
  volume: number = 0;

  /** URL */
  contact_person: string = '';
  /** URL */
  url: string = '';
  /** Phone */
  phone: string = '';
  /** Mail */
  mail: string = '';

  /** Last updated */
  updated: string = '';
}
