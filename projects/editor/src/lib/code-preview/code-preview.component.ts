import { Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Observable, Observer} from 'rxjs';

export interface PreviewFile {
  label: string;
  subtitle?: string;
  description?: string;
 content?: string;
 template?: TemplateRef<any>
}
@Component({
  selector: 'ae-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.scss']
})
export class CodePreviewComponent implements OnInit {
  public files?: Observable<PreviewFile[]>;
  @ViewChild('codeExample', {read: TemplateRef}) codeExample?: TemplateRef<HTMLElement>;

  constructor() {
    this.files = new Observable((observer: Observer<PreviewFile[]>) => {
      observer.next([
        {label: 'TS', subtitle: 'fileName.component.ts'},
        {label: 'SCSS/CSS', subtitle: 'fileName.component.scss'},
        {label: 'HTML', subtitle: 'fileName.component.html'}
      ])
    });
  }

  ngOnInit(): void {

  }

}
