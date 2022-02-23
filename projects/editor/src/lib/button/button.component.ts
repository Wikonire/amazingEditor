import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ButtonSize, ButtonStyle} from './button.enum';

export type AeButtonCursorStyle = 'default'|'auto'|'pointer'|'help'|'wait'|'progress';

@Component({
  selector: 'ae-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class AeButtonComponent implements OnInit {


  @Output() buttonClick: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public style: ButtonStyle = ButtonStyle.SOLID;

  @Input()
  public size: ButtonSize = ButtonSize.SMALL;

  @Input() isDisabled: boolean = false;

  @Input() isActivated: boolean = false;

  @Input() buttonText: string = '';

  @Input() buttonType: 'button'|'submit'|'reset' = 'button';

  @Input() buttonTooltipText: string = '';

  @Input() buttonName: string = '';

  @Input() cursor:AeButtonCursorStyle = 'pointer';

  constructor() { }

  ngOnInit(): void {
  }

}
