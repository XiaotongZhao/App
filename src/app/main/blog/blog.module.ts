import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { NgbTabsetModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../theme/shared/shared.module';
import { EditorModule } from 'src/app/theme/shared/components/editor/editor.module';
import { TableModule } from 'primeng/table';
import { BlogRoutingModule } from './blog-routing.module';
import { CreateOrEditBlogModalComponent } from './blog-modal.component';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  imports: [
    TableModule,
    EditorModule,
    CommonModule,
    BlogRoutingModule,
    SharedModule,
    NgbTabsetModule,
    NgbDropdownModule,
    ModalModule.forRoot()
  ],
  declarations: [BlogComponent, CreateOrEditBlogModalComponent]
})
export class BlogModule { }
