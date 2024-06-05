import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/service/data.service';
import { Convert as basketCvt,Basket } from 'src/app/model/basket.model';
import { Convert as foodCvt, Food } from 'src/app/model/food.model';
import { Convert as loginCvt, Login } from 'src/app/model/login.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ErrorInsertComponent } from 'src/app/component/error-insert/error-insert.component';

@Component({
  selector: 'app-new-basket',
  templateUrl: './new-basket.component.html',
  styleUrls: ['./new-basket.component.scss']
})

export class NewBasketComponent {

  baskets = Array<Basket>();
  foods = Array<Food>();
  logins = Array<Login>();
  price = 0;

  constructor(private dataService: DataService,private http: HttpClient,@Inject(MAT_DIALOG_DATA) public data : any,
  private dialog: MatDialog){
    http.get(dataService.apiEndpoint+"/food/show").subscribe((uid : any)=>{
      this.baskets = basketCvt.toBasket(JSON.stringify(uid));
      for(let index=0; index < uid.length; index++){
        this.price = (uid[index].amount*uid[index].price)+this.price;
      }
    });
  }
  delete(id : number , id2 : number){
    this.http.delete(this.dataService.apiEndpoint+"/basket/"+id+"/"+id2).subscribe((response)=>{

    });
  }

  edit(cusid : number , fid : number, amount: string){
    let Obj = {cusid: cusid, fid: fid, amount: amount}
    let jsonStr =  JSON.stringify(Obj);

    console.log(cusid, fid, amount);

    this.http.put(this.dataService.apiEndpoint+"/basket/"+cusid+"/"+fid, jsonStr, {observe: 'response'})
    .subscribe(response => {

    });

  }

  insertOrder() {
    console.log(this.price);
    if(this.price != 0){
      this.http.get(this.dataService.apiEndpoint+"/order").subscribe(response => {});
    }else{
      this.dialog.open(ErrorInsertComponent,{
        data: {
          animal: 'panda',
        }
      });
    }



  }

}
