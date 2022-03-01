import {
  AfterViewInit,
  Component, ElementRef, HostBinding,
  Input,
  ViewChild
} from '@angular/core';
import {CodeComponent} from './code/code.component';


@Component({
  selector: 'ae-code-preview-content',
  templateUrl: './code-preview-html-content.component.html',
  styleUrls: ['./code-preview-html-content.component.scss']
})
export class CodePreviewHtmlContentComponent implements AfterViewInit {

  constructor() {
  }

  @Input() language: string = '';

  @Input() linenums: string = '';

  @Input() region: string = '';

  @Input()
  set header(header: string) {
    this._header = header;
  }
  get header(): string { return this._header; }
  private _header: string = '';

  @Input()
  set path(path: string) {
    this._path = path;
    this.isAvoid = this.path.indexOf('.avoid.') !== -1;
  }
  get path(): string { return this._path; }
  private _path = '';

  @Input()
  set hidecopy(hidecopy: boolean) {
    // Coerce the boolean value.
    this._hidecopy = hidecopy != null && `${hidecopy}` !== 'false';
  }
  get hidecopy(): boolean { return this._hidecopy; }
  private _hidecopy: boolean = false;

  /* eslint-disable-next-line @angular-eslint/no-input-rename */
  @Input('hide-copy')
  set hyphenatedHideCopy(hidecopy: boolean) {
    this.hidecopy = hidecopy;
  }

  /* eslint-disable-next-line @angular-eslint/no-input-rename */
  @Input('hideCopy')
  set capitalizedHideCopy(hidecopy: boolean) {
    this.hidecopy = hidecopy;
  }

  @HostBinding('class.avoidFile') isAvoid = false;

  @ViewChild('content', { static: true }) content?: ElementRef<HTMLDivElement>;

  @ViewChild(CodeComponent, { static: true }) exampleCode?: CodeComponent;

  ngAfterViewInit() {
    const contentElem = this.content?.nativeElement;
    console.log(contentElem?.children)
    if (contentElem)
    for (let i = 0; i < contentElem.children.length; i++) {
      console.log(contentElem.children[i])
      if (contentElem.children[i].children.length>=1) console.log(contentElem.children[i].children)

    }
    if (this.exampleCode) {
      this.exampleCode.code = contentElem?.innerHTML;
    }
    }
}
