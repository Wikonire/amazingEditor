import { NgModule } from '@angular/core';
import { AeEditorComponent } from './editor.component';
import { AeButtonComponent } from './button/button.component';
import { AeTooltipDirective } from './tooltip/tooltip.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CodePreviewComponent } from './code-preview/code-preview.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SafePipe } from './_shared/pipes/safe.pipe';
import { CodeComponent } from './code-preview-content/code/code.component';
import {CodePreviewHtmlContentComponent} from './code-preview-content/code-preview-html-content.component';
import {ClipboardModule} from '@angular/cdk/clipboard';



@NgModule({
    declarations: [
        AeEditorComponent,
        AeButtonComponent,
        AeTooltipDirective,
        CodePreviewComponent,
        CodePreviewHtmlContentComponent,
        SafePipe,
        CodeComponent
    ],
  imports: [
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    ClipboardModule
  ],
  exports: [
    AeEditorComponent,
    AeButtonComponent,
    AeTooltipDirective,
    CodePreviewComponent,
    SafePipe,
    CodePreviewHtmlContentComponent,
    CodeComponent

  ], providers: [SafePipe]
})
export class EditorModule { }
