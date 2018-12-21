import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-weather-v2',
  templateUrl: './weather-v2.component.html',
  styleUrls: ['./weather-v2.component.css']
})
export class WeatherV2Component implements OnInit {

  data2 ;
  show2 = false;
  numbers;
  len;




  constructor(private http: HttpClient) { }

  ngOnInit() {



  }

}
