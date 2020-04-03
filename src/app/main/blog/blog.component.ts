import { LazyLoadEvent } from 'primeng/api';
import { CreateOrEditBlogModalComponent } from './blog-modal.component';
import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { BlogServiceProxy, BlogSearch, BlogInfo } from 'src/app/shared/service-proxies/service-proxies';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

@Injectable()
export class BlogComponent implements OnInit {
  @ViewChild('createOrEditBlogModal', { static: true }) createOrEditBlogModal: CreateOrEditBlogModalComponent;
  datas: BlogInfo[];
  totalRecords: number;
  loading: boolean;
  blogSearch: BlogSearch = new BlogSearch();
  cols: string[] = ['Type', 'Name', 'Action'];

  constructor(private notifier: NotifierService, private blogServiceProxy: BlogServiceProxy) { }

  ngOnInit() {
  }

  loadCarsLazy(event?: LazyLoadEvent) {
    this.loading = true;
    if (event) {
      this.blogSearch.skip = event.first;
      this.blogSearch.size = event.rows;
    }
    this.blogServiceProxy.getBlogInfos(this.blogSearch).subscribe(res => {
      this.datas = res.data;
      this.totalRecords = res.count;
      this.loading = false;
    });
  }

  delete(blog: BlogInfo) {
    this.blogServiceProxy.deleteBlog(blog).subscribe(res => {
      this.loading = false;
      this.notifier.notify("success", "Action is successfull");
      this.loadCarsLazy();
    });
  }

  showBlogDetail(id: number) {
    this.createOrEditBlogModal.show(id);
  }
}
