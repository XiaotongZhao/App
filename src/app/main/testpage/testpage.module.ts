import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestpageComponent } from './testpage.component';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../theme/shared/shared.module';
import { TestpageRoutingModule } from './testpage-routing.module';
import { EditorModule } from 'src/app/theme/shared/components/editor/editor.module';

@NgModule({
    imports: [
        EditorModule,
        CommonModule,
        TestpageRoutingModule,
        SharedModule,
        NgbTabsetModule
    ],
    declarations: [TestpageComponent]
})
export class TestpageModule { }
