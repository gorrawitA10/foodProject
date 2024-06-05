import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Convert as orderCvt, Order } from 'src/app/model/order.model';
import { DataService } from 'src/app/service/data.service';
import { Convert as orderamountCvt, OrderAmount } from 'src/app/model/orderamount.model';
import { MatDialog } from '@angular/material/dialog';
import { ShowBasketCusComponent } from 'src/app/component/show-basket-cus/show-basket-cus.component';
import { CheckPayComponent } from 'src/app/component/check-pay/check-pay.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-order-cus',
  templateUrl: './order-cus.component.html',
  styleUrls: ['./order-cus.component.scss']
})

export class OrderCusComponent {

  orderamounts = Array<OrderAmount>();
  orders = Array<Order>();

  constructor(private dataService: DataService, private http: HttpClient,
    private dialog: MatDialog){
    http.get(dataService.apiEndpoint+"/orderss").subscribe(data => {
      this.orders = orderCvt.toOrder(JSON.stringify(data));
      console.log(this.orders);
    });
  }

  showbasket(oid: number){
    let obj = {oid: oid};
    this.http.get(this.dataService.apiEndpoint+"/orderamount/"+JSON.stringify(oid)).subscribe(data => {
      this.orderamounts = orderamountCvt.toOrderAmount(JSON.stringify(data));
      // console.log(this.orderamounts);
      this.dialog.open(ShowBasketCusComponent, {
        width: '1400px',
        height: '500px',
        data: this.orderamounts
      });
    });
  }

  checkPay(oid: number) {
    this.dialog.open(CheckPayComponent,{data: oid});
  }


}
