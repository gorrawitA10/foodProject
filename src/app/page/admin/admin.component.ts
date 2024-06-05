import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

import { Convert as foodCvt, Food } from 'src/app/model/food.model';
import { Convert as typeCvt, Type } from 'src/app/model/type.model';
import { MatDialog } from '@angular/material/dialog';
import { Convert as loginCvt, Login } from 'src/app/model/login.model';
import { NewEditComponent } from '../new-edit/new-edit.component';
import { Router } from '@angular/router';
import { OrderAdComponent } from '../order-ad/order-ad.component';
import { NewMoneyTotalComponent } from 'src/app/component/new-money-total/new-money-total.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  foods = Array<Food>();
  types = Array<Type>();
  logins = Array<Login>();
  selectedFood : any;

  constructor(private dataService: DataService, private http: HttpClient,
    private dialog: MatDialog, private router: Router){
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

  newEdit(foods: Food) {
    this.dialog.open(NewEditComponent, {
      width: '500px',
      height: '360px',
      data: foods
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

  close(){
    this.http.delete(this.dataService.apiEndpoint+"/login/"+1).subscribe((res)=>{
      console.log(res);
    });
  }

  order(){
    const dialogRef = this.dialog.open(OrderAdComponent,{
      width: '700px',
      height: '500px'
    });
  }

  showPay(){
    this.dialog.open(NewMoneyTotalComponent);
  }
}
