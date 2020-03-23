import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AngularEditorModule
  ],
  declarations: [EditorComponent],
  exports: [EditorComponent],
  providers: []
})
export class EditorModule { }
