import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ModalModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { NotifierModule } from 'angular-notifier';
import { BlogRoutingModule } from './blog-routing.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { SharedModule } from '../../theme/shared/shared.module';
import { CreateOrEditBlogModalComponent } from './blog-modal.component';
import { NgbTabsetModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    TableModule,
    CommonModule,
    SharedModule,
    NotifierModule,
    NgbTabsetModule,
    NgbDropdownModule,
    BlogRoutingModule,
    AngularEditorModule,
    ModalModule.forRoot(),
  ],
  declarations: [BlogComponent, CreateOrEditBlogModalComponent]
})
export class BlogModule { }
