import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { BlogServiceProxy, BlogSearch, BlogInfo } from 'src/app/shared/service-proxies/service-proxies';
import { LazyLoadEvent } from 'primeng/api';
import { CreateOrEditBlogModalComponent } from './blog-modal.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

@Injectable()
export class BlogComponent implements OnInit {
  datas: BlogInfo[];
  cols: string[] = ['Type', 'Name', 'Action'];
  first = 0;
  loading: boolean = false;
  blogSearch: BlogSearch = new BlogSearch();
  totalRecords: number;
  constructor(private blogServiceProxy: BlogServiceProxy) { }
  @ViewChild('createOrEditBlogModal', { static: true }) createOrEditBlogModal: CreateOrEditBlogModalComponent;

  ngOnInit() {
  }

  loadCarsLazy(event: LazyLoadEvent) {
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

  delete(id: number) {
  }

  showBlogDetail(id: number) {
    this.createOrEditBlogModal.show(id);
  }
}
