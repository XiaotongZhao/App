import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { EditorComponent } from 'src/app/theme/shared/components/editor/editor.component';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})

@Injectable()
export class TestpageComponent implements OnInit {
  @ViewChild('htmlContent', { static: true }) editor: EditorComponent;

  constructor() {
  }

  ngOnInit() {
  }

  test() {
    const testText = this.editor.htmlContent;
    console.log(testText);
  }

}
