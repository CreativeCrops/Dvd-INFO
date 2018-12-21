import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Config} from 'protractor';



@Component({
  selector: 'app-weather-v1',
  templateUrl: './weather-v1.component.html',
  styleUrls: ['./weather-v1.component.css']
})
export class WeatherV1Component implements OnInit {

  name: '';
  data: any;
  show = false;
  data1: any;
  show1 = false;

  data2 ;
  show2 = false;
  numbers;
  len;




  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://develop-server.eu-gb.mybluemix.net/api?q=Udumalaippettai')
  .subscribe((data) =>  {
   // console.log(data);
    this.data = data;
    this.show = true;
    });

    this.http.get('http://develop-server.eu-gb.mybluemix.net/api3?q=Udumalaippettai')
    .subscribe((data) =>  {
    // console.log(data);
    this.data1 = data;
    this.show1 = true;
    });

    this.http.get('http://develop-server.eu-gb.mybluemix.net/api2?url=https://www.agrifarming.in/&xpath=//div[@id=main-content]/div[1]/div[1]/article[@class=item-list]/img,div[@id=main-content]/div[1]/div[1]/article[@class=item-list]/h2,div[@id=main-content]/div[1]/div[1]/article[@class=item-list]/div/p')
    .subscribe((data) =>  {
      this.data2 = data;
      this.show2 = true;
      this.len = this.data2.length / 3;
      console.log(this.len);
      this.numbers = Array(this.len).fill(0)
        .map((x, i) => i);


    });
  }

}
