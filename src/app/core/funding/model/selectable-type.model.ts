/**
 * Extends type by attributes to make it selectable
 */
export class SelectableType {
  /** Whether the type is selected */
  selected = true;
  /** Whether the type is selectable */
  disabled = false;

  /**
   * Constructor
   * @param name name
   */
  constructor(public name: string) {
  }
}
