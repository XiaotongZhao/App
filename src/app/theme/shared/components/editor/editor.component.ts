import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  public htmlContent: any;
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '30rem',
    maxHeight: '100%',
    placeholder: 'Enter text here...',
    translate: 'no',
    sanitize: false,
    outline: true,
    defaultFontName: 'Comic Sans MS',
    defaultFontSize: '5',
    defaultParagraphSeparator: 'p',
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
