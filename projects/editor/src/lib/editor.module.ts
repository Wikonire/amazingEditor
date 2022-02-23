import { NgModule } from '@angular/core';
import { AeEditorComponent } from './editor.component';
import { AeButtonComponent } from './button/button.component';
import { AeTooltipDirective } from './tooltip/tooltip.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        AeEditorComponent,
        AeButtonComponent,
        AeTooltipDirective
    ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    AeEditorComponent,
    AeButtonComponent,
    AeTooltipDirective
  ],
})
export class EditorModule { }
