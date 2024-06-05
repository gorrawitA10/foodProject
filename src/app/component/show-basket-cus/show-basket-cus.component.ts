import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { NewPayComponent } from '../new-pay/new-pay.component';

@Component({
  selector: 'app-show-basket-cus',
  templateUrl: './show-basket-cus.component.html',
  styleUrls: ['./show-basket-cus.component.scss']
})
export class ShowBasketCusComponent {

  price = 0;
  oid : any;

  constructor(private dataService: DataService, private http: HttpClient,
    @Inject(MAT_DIALOG_DATA)public data:any, private dialog: MatDialog){
      for (let index = 0; index < data.length; index++) {
        this.price = this.price+ (data[index].amount * data[index].price);
      }
      this.oid = data[0].oid;
  }

  pay(price: number){
    this.dialog.open(NewPayComponent, {
      data: {price : this.price , oid : this.oid}
    });
  }
}
