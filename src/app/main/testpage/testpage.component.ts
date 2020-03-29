import { Component, OnInit, Injectable } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';


@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})

@Injectable()
export class TestpageComponent implements OnInit {
  datas: any[];
  cols: any[];
  first = 0;
  loading: boolean = false;
  totalRecords: number;
  constructor() {
  }

  ngOnInit() {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    this.datas = [
      { vin: 'test', year: '12', brand: 'testbrand', color: 'black' },
      { vin: 'test', year: '12', brand: 'testbrand', color: 'black' },
      { vin: 'test', year: '12', brand: 'testbrand', color: 'black' },
      { vin: 'test', year: '12', brand: 'testbrand', color: 'black' },
      { vin: 'test', year: '12', brand: 'testbrand', color: 'black' },
      { vin: 'test', year: '12', brand: 'testbrand', color: 'black' },
      { vin: 'test', year: '12', brand: 'testbrand', color: 'black' },
      { vin: 'test', year: '12', brand: 'testbrand', color: 'black' },
      { vin: 'test', year: '12', brand: 'testbrand', color: 'black' },
      { vin: 'test', year: '12', brand: 'testbrand', color: 'black' },

      { vin: 'test', year: '12', brand: 'testbrand', color: 'black' }
    ];
    this.totalRecords = this.datas.length;
  }


  loadCarsLazy(event: LazyLoadEvent) {
  }
}
