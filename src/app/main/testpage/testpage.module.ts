import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../theme/shared/shared.module';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { TestpageComponent } from './testpage.component';
import { TestpageRoutingModule } from './testpage-routing.module';

@NgModule({
    imports: [
        CommonModule,
        TestpageRoutingModule,
        SharedModule,
        NgbTabsetModule
    ],
    declarations: [TestpageComponent]
})
export class TestpageModule { }
