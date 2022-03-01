import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {SafeHtml} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {SafePipe} from '../../_shared/pipes/safe.pipe';

@Component({
  selector: 'ae-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit, OnChanges{

  ariaLabel = '';

   private codeText?: string = '';

   set code(code: SafeHtml|undefined) {
    this._code = code;
    this.formatDisplayedCode();
  }
  get code(): SafeHtml|undefined {
    return this._code;
  }
  _code?: SafeHtml;

  /** Whether the copy button should be shown. */
  @Input() hideCopy?: boolean;

  /** Language to render the code (e.g. javascript, dart, typescript). */
  @Input() language: string | undefined;

  /**
   * Whether to display line numbers:
   *  - If false: hide
   *  - If true: show
   *  - If number: show but start at that number
   */
  @Input() linenums: boolean | number | string | undefined;

  /** Path to the source of the code. */
  @Input() path: string = '';

  /** Region of the source of the code being displayed. */
  @Input() region: string = '';

  /** Optional header to be displayed above the code. */
  @Input()
  set header(header: string | undefined) {
    this._header = header;
    this.ariaLabel = this.header ? `Copy code snippet from ${this.header}` : '';
  }
  get header(): string|undefined { return this._header; }
  private _header: string | undefined;

  @Output() codeFormatted = new EventEmitter<void>();

  /** The element in the template that will display the formatted code. */
  @ViewChild('codeContainer', { static: true }) codeContainer?: ElementRef;

  constructor(private safe: SafePipe) {}

  ngOnChanges() {
    // If some inputs have changed and there is code displayed, update the view with the latest
    // formatted code.
    if (this.code) {
      this.formatDisplayedCode();
    }
  }

  private formatDisplayedCode() {
    const linenums = this.getLinenums();
    if (this.code) {
      this.setCodeHtml(this.htmlEntities(this.code)); // start with unformatted code
    }
    this.codeText = this.getCodeText(); // store the unformatted code as text (for copying)

    if (linenums !== false && this.language === 'none') {
      console.warn("Using 'linenums' with 'language: none' is currently not supported.");
    }
  }



  /** Sets the innerHTML of the code container to the provided code string. */
  private setCodeHtml(formattedCode: string) {
    if (this.codeContainer) {
      this.codeContainer.nativeElement.innerHTML = formattedCode;
    }
  }

  /** Gets the textContent of the displayed code element. */
  private getCodeText(): string | undefined {
    return this.codeContainer?.nativeElement.textContent;
  }

  /** Copies the code snippet to the user's clipboard. */
  doCopy() {
   return this.codeText || '';
    }

  /** Gets the calculated value of linenums (boolean/number). */
  getLinenums() {
    const linenums =
      typeof this.linenums === 'boolean' ? this.linenums :
        this.linenums === 'true' ? true :
          this.linenums === 'false' ? false :
            typeof this.linenums === 'string' ? parseInt(this.linenums, 10) :
              this.linenums;

    return (linenums != null) && !isNaN(linenums as number) && linenums;
  }

  ngOnInit(): void {
  }

  htmlEntities(entities:any) {
    console.log(entities)
    return String(entities).replace(/&/g, '&amp;').replace(/</g, '<br>&lt;').replace(/>/g, '&gt;<br>').replace(/"/g, '&quot;');
  }
}
