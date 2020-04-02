import { ModalDirective } from 'ngx-bootstrap';
import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { BlogServiceProxy, BlogInfo } from 'src/app/shared/service-proxies/service-proxies';
import { EditorComponent } from 'src/app/theme/shared/components/editor/editor.component';

@Component({
    selector: 'createOrEditBlogModal',
    templateUrl: './blog-modal.component.html'
})

export class CreateOrEditBlogModalComponent {
    @ViewChild('createOrEditModal', { static: true }) modal: ModalDirective;
    @ViewChild('htmlContent', { static: true }) edit: EditorComponent;
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
    saving = false;
    blog: BlogInfo;
    constructor(
        private blogServiceProxy: BlogServiceProxy
    ) {
    }

    async  show(id: number) {
        this.edit.htmlContent = null;
        if (id) {
            this.blog = await this.blogServiceProxy.getBlogById(id).toPromise()
            this.edit.htmlContent = this.blog.content;
        } else {
            this.blog = new BlogInfo();
        }
        this.modal.show();
    }

    save(): void {
        this.blog.content = this.edit.htmlContent;
        if (this.blog.id) {
            this.blogServiceProxy.updateBlogInfo(this.blog).subscribe(res => {
                this.modalSave.emit(null);
                this.close();
            });
        } else {
            this.blogServiceProxy.createBlogInfo(this.blog).subscribe(res => {
                this.modalSave.emit(null);
                this.close();
            });
        }

    }

    close(): void {
        this.modal.hide();
    }
}