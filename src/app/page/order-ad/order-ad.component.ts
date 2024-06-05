import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Convert as orderCvt, Order } from 'src/app/model/order.model';
import { DataService } from 'src/app/service/data.service';
import { Convert as orderamountCvt, OrderAmount } from 'src/app/model/orderamount.model';
import { MatDialog } from '@angular/material/dialog';
import { ShowBasketCusComponent } from 'src/app/component/show-basket-cus/show-basket-cus.component';
import { Convert as statusorderCvt, StatusOrder } from 'src/app/model/statusorder.model';
import { ShowBasketAdComponent } from 'src/app/component/show-basket-ad/show-basket-ad.component';
@Component({
  selector: 'app-order-ad',
  templateUrl: './order-ad.component.html',
  styleUrls: ['./order-ad.component.scss']
})
export class OrderAdComponent {

  orderamounts = Array<OrderAmount>();
  orders = Array<Order>();
  status = Array<StatusOrder>();
  pop : any;

  constructor(private dataService: DataService, private http: HttpClient,
    private dialog: MatDialog){
    http.get(dataService.apiEndpoint+"/statusname").subscribe((data : any) => {
      this.orders = orderCvt.toOrder(JSON.stringify(data));
      console.log(data);

    });
    http.get(dataService.apiEndpoint+"/statusorder").subscribe(data => {
      this.status = statusorderCvt.toStatusOrder(JSON.stringify(data));
      console.log(data);

    });

  }

  showbasket(oid: number){
    let obj = {oid: oid};
    this.http.get(this.dataService.apiEndpoint+"/orderamount/"+JSON.stringify(oid)).subscribe(data => {
      this.orderamounts = orderamountCvt.toOrderAmount(JSON.stringify(data));
      // console.log(this.orderamounts);
      this.dialog.open(ShowBasketAdComponent, {
        width: '1400px',
        height: '500px',
        data: this.orderamounts
      });
    });
  }

  edit(sid : number, oid : number){
    let obj = {sid: sid}
    console.log(sid);
    this.http.put(this.dataService.apiEndpoint+"/ordersUp/"+oid, JSON.stringify(obj)).subscribe(data => {
      console.log(data);
      window.location.reload();
    });


  }

}
