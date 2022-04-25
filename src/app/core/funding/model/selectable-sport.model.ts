/**
 * Extends sport by attributes to make it selectable
 */
export class SelectableSport {
  /** Whether the sport is selected */
  selected = true;
  /** Whether the sport is selectable */
  disabled = false;

  /**
   * Constructor
   * @param name name
   */
  constructor(public name: string) {
  }
}
