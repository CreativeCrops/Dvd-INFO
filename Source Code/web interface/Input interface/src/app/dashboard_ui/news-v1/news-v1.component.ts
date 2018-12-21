import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-news-v1',
  templateUrl: './news-v1.component.html',
  styleUrls: ['./news-v1.component.css']
})
export class NewsV1Component implements OnInit {



  data2 ;
  show2 = false;
  numbers;
  len;




  constructor(private http: HttpClient) { }

  ngOnInit() {


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
