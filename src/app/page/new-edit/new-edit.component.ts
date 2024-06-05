import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-new-edit',
  templateUrl: './new-edit.component.html',
  styleUrls: ['./new-edit.component.scss']
})

export class NewEditComponent {

  showDialog = false;

  constructor(private dataService: DataService, private http: HttpClient, @Inject(MAT_DIALOG_DATA)public data:any){
    console.log(data);
  }

  edit(img: string, name: string, price: string){
    let Obj = {img: img, name: name, price: price};
    let jsonStr = JSON.stringify(Obj);
    this.http.put(this.dataService.apiEndpoint+"/food/"+this.data.fid,jsonStr )
    .subscribe(response => {
      window.location.reload();
    });

  // console.log(this.dataService.apiEndpoint+"/food/"+this.data.fid);
  }
}
