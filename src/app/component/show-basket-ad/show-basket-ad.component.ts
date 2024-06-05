import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { NewPayComponent } from '../new-pay/new-pay.component';


@Component({
  selector: 'app-show-basket-ad',
  templateUrl: './show-basket-ad.component.html',
  styleUrls: ['./show-basket-ad.component.scss']
})
export class ShowBasketAdComponent {
  price = 0;

  constructor(private dataService: DataService, private http: HttpClient,
    @Inject(MAT_DIALOG_DATA)public data:any, private dialog: MatDialog){
      for (let index = 0; index < data.length; index++) {
        this.price = this.price+ (data[index].amount * data[index].price);
      }
  }

}
