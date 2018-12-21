import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-events-v1',
  templateUrl: './events-v1.component.html',
  styleUrls: ['./events-v1.component.css']
})
export class EventsV1Component implements OnInit {


  data2 ;
  show2 = false;
  numbers;
  len;




  constructor(private http: HttpClient) { }

  ngOnInit() {


    this.http.get('http://develop-server.eu-gb.mybluemix.net/api2?url=https://10times.com/india/agriculture-forestry&xpath=//table[@class=listing]/tbody/tr/td')
      .subscribe((data) =>  {
        this.data2 = data;
         this.show2 = true;
        this.len = this.data2.length;
        // console.log(this.len);

        const foo = [];

        for (let i = 6; i < this.len - 6; i = i + 6) {
          foo.push(i);
        }
        this.numbers = foo;
        this.len = foo.length;
        // console.log(this.numbers);

      });
  }

}
