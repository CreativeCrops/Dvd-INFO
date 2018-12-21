import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-crop-seed-v1',
  templateUrl: './crop-seed-v1.component.html',
  styleUrls: ['./crop-seed-v1.component.css']
})
export class CropSeedV1Component implements OnInit {



  data2 ;
  show2 = false;
  numbers;
  len;




  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://develop-server.eu-gb.mybluemix.net/api2?url=https://www.burpee.com/vegetables/&xpath=//div[@class=b-clp_subcat-list]/img,//div[@class=b-clp_subcat-list]/a')
      .subscribe((data) =>  {
        this.data2 = data;
        this.show2 = true;
        this.len = this.data2.length / 2;
        console.log(this.len);
        this.numbers = Array(this.len).fill(0)
          .map((x, i) => i);


      });
  }

}
