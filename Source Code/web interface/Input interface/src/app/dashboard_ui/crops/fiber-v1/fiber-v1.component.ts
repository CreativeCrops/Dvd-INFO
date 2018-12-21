import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-fiber-v1',
  templateUrl: './fiber-v1.component.html',
  styleUrls: ['./fiber-v1.component.css']
})
export class FiberV1Component implements OnInit {

  data2 ;
  show2 = false;
  numbers;
  len;




  constructor(private http: HttpClient) { }

  ngOnInit() {


    this.http.get('http://develop-server.eu-gb.mybluemix.net/api2?url=https://www.commodityonline.com/market-place/commodity-sector/fiber/8&xpath=//div[@class=home_ma_s]/img')
      .subscribe((data) =>  {
        this.data2 = data;
        this.show2 = true;
        this.len = this.data2.length;


      });
  }

}