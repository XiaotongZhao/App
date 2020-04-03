import { ModalDirective } from 'ngx-bootstrap';
import { NotifierService } from "angular-notifier";
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { BlogServiceProxy, BlogInfo } from 'src/app/shared/service-proxies/service-proxies';
@Component({
    selector: 'createOrEditBlogModal',
    templateUrl: './blog-modal.component.html'
})

export class CreateOrEditBlogModalComponent {
    @ViewChild('createOrEditModal', { static: true }) modal: ModalDirective;
    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();
    saving = false;
    blog: BlogInfo;
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
    constructor(
        private notifier: NotifierService,
        private blogServiceProxy: BlogServiceProxy
    ) {
    }

    async show(id: number) {
        this.blog = id ? await this.blogServiceProxy.getBlogById(id).toPromise() : new BlogInfo();
        this.modal.show();
    }

    async save() {
        if (this.blog.id) {
            await this.blogServiceProxy.updateBlogInfo(this.blog).toPromise();
        } else {
            await this.blogServiceProxy.createBlogInfo(this.blog).toPromise();
        }
        this.notifier.notify("success", "Action is successfull");
        this.modalSave.emit(null);
        this.close();
    }

    close(): void {
        this.modal.hide();
    }
}