import { Component } from '@angular/core';
import {TooltipPlacement} from '../../../editor/src/lib/tooltip/tooltip.types';

@Component({
  selector: 'sc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  placement = TooltipPlacement;
  title = 'showcase';
}
