import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-food';

  constructor(private http: HttpClient){
    // this.getFood();



  }

  // async getFood() {
  //   console.log('Start');
  //   let url = 'http://localhost/webapi_food/food';
  //   let data : any = await lastValueFrom(this.http.get(url));
  //   console.log('Complete');
  //   console.log(data);

  //   console.log('Continue');
  // }


}
