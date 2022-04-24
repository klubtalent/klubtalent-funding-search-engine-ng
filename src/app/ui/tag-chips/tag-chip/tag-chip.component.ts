import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

/**
 * Displays tag
 */
@Component({
  selector: 'app-tag-chip',
  templateUrl: './tag-chip.component.html',
  styleUrls: ['./tag-chip.component.scss'],
  animations: [
    trigger('tagTextAnimation', [
      state('open', style({
        opacity: '1',
        overflow: 'hidden',
        width: '*'
      })),
      state('closed', style({
        opacity: '0',
        overflow: 'hidden',
        width: '0px'
      })),
      transition('* => *', animate('250ms ease-in-out'))
    ])
  ]
})
export class TagChipComponent implements OnInit {

  /** Title to be displayed */
  @Input() title: string | null = '';
  /** Icon to be displayed */
  @Input() icon: string | null = '';
  /** Whether the component is readonly */
  @Input() readonly = false;

  /** Text color of the tag */
  @Input() color = 'black';
  /** Background color of the tag */
  @Input() background = 'white';
  /** Placeholder for new elements */
  @Input() placeholder = 'New tag';

  /** Whether text animation is enabled or not */
  @Input() tagTextAnimationEnabled = false;
  /** State of the text animation */
  @Input() tagTextAnimationState = 'open';

  //
  // Lifecycle hooks
  //

  /**
   * Handles on-init lifecycle phase
   */
  ngOnInit() {
    this.tagTextAnimationState = this.tagTextAnimationEnabled ? 'closed' : 'open';
  }

  //
  // Actions
  //

  /**
   * Handles mouse enter event
   */
  onMouseEnter() {
    this.tagTextAnimationState = 'opened';
  }

  /**
   * Handles mouse leave event
   */
  onMouseLeave() {
    this.tagTextAnimationState = this.tagTextAnimationEnabled ? 'closed' : 'open';
  }
}
