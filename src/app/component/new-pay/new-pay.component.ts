import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';
import { ThanksForpayComponent } from '../thanks-forpay/thanks-forpay.component';

@Component({
  selector: 'app-new-pay',
  templateUrl: './new-pay.component.html',
  styleUrls: ['./new-pay.component.scss']
})
export class NewPayComponent {

  constructor(private dataService: DataService, private http: HttpClient,@Inject(MAT_DIALOG_DATA)public data: any, private dialog: MatDialog) {}

  thanks(p : number,oid : number){
    let oj = {sumprice : p,oid :oid};
    this.http.put(this.dataService.apiEndpoint+"/pay",JSON.stringify(oj)).subscribe(response =>{
      console.log(p);
    });

    this.dialog.open(ThanksForpayComponent);
  }


}

