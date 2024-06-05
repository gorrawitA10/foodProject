import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-check-pay',
  templateUrl: './check-pay.component.html',
  styleUrls: ['./check-pay.component.scss']
})
export class CheckPayComponent {

  name: any;
  check: any;
  oid : any;

  constructor(private dataServic: DataService, private http: HttpClient,
    @Inject(MAT_DIALOG_DATA)public data:any){
    http.get(dataServic.apiEndpoint+"/order/"+data).subscribe((response : any)=>{
      console.log(response[0].namee);
      this.name = response[0].namee;
        if(response[0].pid == 1) {
          this.check = true;
        }else {
          this.check = false;
        }
        this.oid = response[0].oid;
    });
  }
  dee(){
    this.http.delete(this.dataServic.apiEndpoint+"/orders/"+this.oid).subscribe(data =>{

    });
  }
}
