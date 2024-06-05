import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Convert as foodCvt, Food } from 'src/app/model/food.model';

@Component({
  selector: 'app-new-admin',
  templateUrl: './new-admin.component.html',
  styleUrls: ['./new-admin.component.scss']
})
export class NewAdminComponent {
  foods = Array<Food>();
  selectedFood : any;

  constructor(private dataService: DataService, private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data : any){
      http.get(dataService.apiEndpoint + "/food/" + data).subscribe((fid:any) => {
        this.foods = foodCvt.toFood(JSON.stringify(fid));
      });
  }
}
