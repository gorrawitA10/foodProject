import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-new-money-total',
  templateUrl: './new-money-total.component.html',
  styleUrls: ['./new-money-total.component.scss']
})
export class NewMoneyTotalComponent {

  total = 0;

  constructor(private dataService: DataService, private http: HttpClient){
    http.get(dataService.apiEndpoint+"/pay").subscribe((data:any) => {
      this.total = data[0].money;
    });
  }

}
