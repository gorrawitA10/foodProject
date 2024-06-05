import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { Convert as loginCvt, Login } from 'src/app/model/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  url : any;
  logins = Array<Login>();

  constructor(private dataService: DataService, private http: HttpClient, private router: Router){ }

  login(username : string , password : string){
      let Obj = {username: username, password: password};
      let jsonString = JSON.stringify(Obj);
      this.http.post(this.dataService.apiEndpoint + this.url + "/login",jsonString).subscribe((response)=>{
      }, error => {
        this.http.get(this.dataService.apiEndpoint+"/login")
        .subscribe(response => {
        this.logins = loginCvt.toLogin(JSON.stringify(response));
        // console.log(this.logins);
        var keys = Object.keys(response);
        var len = keys.length;
        if (len == 1) {
          this.router.navigateByUrl(this.url);
        }
        else{
          console.log("ERROR!");

        }
      });
    });
  }

  clickcus(){
    this.url = '/customer';
    // console.log(this.pop);
  }
  clickad(){
    this.url = '/admin';
    // console.log(this.pop);
  }
}
