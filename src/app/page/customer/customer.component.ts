import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

import { Convert as foodCvt, Food } from 'src/app/model/food.model';
import { Convert as typeCvt, Type } from 'src/app/model/type.model';
import { MatDialog } from '@angular/material/dialog';
import { NewComponent } from '../new/new.component';
import { NewBasketComponent } from '../new-basket/new-basket.component';
import { Convert as loginCvt, Login } from 'src/app/model/login.model';
import { OrderCusComponent } from '../order-cus/order-cus.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  foods = Array<Food>();
  types = Array<Type>();
  logins = Array<Login>();
  selectedFood : any;

  constructor(private dataService: DataService, private http: HttpClient,
    private dialog: MatDialog){
    http.get(dataService.apiEndpoint + "/food").subscribe((data:any) => {
      this.foods = foodCvt.toFood(JSON.stringify(data));
      console.log(this.foods);
    });
    http.get(dataService.apiEndpoint + "/type").subscribe((data:any) => {
      this.types = typeCvt.toType(JSON.stringify(data));
      console.log(this.types);
    });
    http.get(dataService.apiEndpoint + "/login").subscribe(log => {
      this.logins = loginCvt.toLogin(JSON.stringify(log));
    });
  }

  clickFid(fid: number){
    console.log(this.selectedFood);
    this.dialog.open(NewComponent,{
      width : "250px",
      height : "350px",
      data : fid
    });
  }

  clickType(nameType : string){
  this.http.get(this.dataService.apiEndpoint + "/food/type/" + nameType).subscribe(data => {
    this.foods = foodCvt.toFood(JSON.stringify(data));
    });
  }
  clickAll(){
    this.http.get(this.dataService.apiEndpoint + "/food").subscribe( data => {
     this.foods = foodCvt.toFood(JSON.stringify(data));
   });
  }

  basketShow(){
      const dialogRef = this.dialog.open(NewBasketComponent, {
        width: '1400px',
        height: '500px'
      });
  }
  close(){
    this.http.delete(this.dataService.apiEndpoint+"/login/"+1).subscribe((res)=>{
      console.log(res);
    });
  }

  order(){
    this.dialog.open(OrderCusComponent,{
      width: '600px',
      height: '500px'
    });
  }
}
