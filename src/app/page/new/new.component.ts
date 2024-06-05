import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { Convert as foodCvt, Food } from 'src/app/model/food.model';
import { Convert as loginCvt, Login } from 'src/app/model/login.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  foods = Array<Food>();
  logins = Array<Login>();

  constructor(private dataService: DataService, private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data : any){
      http.get(dataService.apiEndpoint + "/food/" + data).subscribe((fid:any) => {
        this.foods = foodCvt.toFood(JSON.stringify(fid));
      });
      http.get(dataService.apiEndpoint + "/login").subscribe(log => {
        this.logins = loginCvt.toLogin(JSON.stringify(log));
      });
  }
  addbas(uid : number ,fid : number , amount : string , price : number , pic : string , name : string){
    let Obj = {
      cusid : uid,
      fid : fid,
      amount : amount,
      price : price,
      pic : pic,
      name : name
    }
    let Objstr = JSON.stringify(Obj);
    this.http.post(this.dataService.apiEndpoint+"/basket",Objstr,{observe : 'response'}).subscribe((response) =>{
      console.log(JSON.stringify(response.status));
      console.log(JSON.stringify(response.body));
    })
    console.log(this.dataService.apiEndpoint+"/basket");

  }

}
