import { Component, OnInit, Injectable } from '@angular/core';
import { MenuServiceProxy } from 'src/app/shared/service-proxies/service-proxies';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})

@Injectable()
export class TestpageComponent implements OnInit {

  constructor(private menuServiceProxy: MenuServiceProxy) {
  }

  async ngOnInit() {
    let tes = await this.menuServiceProxy.getMenuData().toPromise()
  }

}
