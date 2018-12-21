import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-others-v1',
  templateUrl: './others-v1.component.html',
  styleUrls: ['./others-v1.component.css']
})
export class OthersV1Component implements OnInit {

  data2 ;
  show2 = false;
  numbers;
  len;




  constructor(private http: HttpClient) { }

  ngOnInit() {


    this.http.get('http://develop-server.eu-gb.mybluemix.net/api2?url=https://www.commodityonline.com/market-place/commodity-sector/others/10&xpath=//div[@class=home_ma_s]/img')
      .subscribe((data) =>  {
        this.data2 = data;
        this.show2 = true;
        this.len = this.data2.length;


      });
  }

}
