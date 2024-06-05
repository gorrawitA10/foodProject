import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './page/customer/customer.component';
import { LoginComponent } from './page/login/login.component';
import { AdminComponent } from './page/admin/admin.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import { NewComponent } from './page/new/new.component';
import { NewAdminComponent } from './page/new-admin/new-admin.component';
import { NewBasketComponent } from './page/new-basket/new-basket.component';
import { NewEditComponent } from './page/new-edit/new-edit.component';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderCusComponent } from './page/order-cus/order-cus.component';
import { OrderAdComponent } from './page/order-ad/order-ad.component';
import { ShowBasketCusComponent } from './component/show-basket-cus/show-basket-cus.component';
import { ErrorInsertComponent } from './component/error-insert/error-insert.component';
import { NewPayComponent } from './component/new-pay/new-pay.component';
import { ThanksForpayComponent } from './component/thanks-forpay/thanks-forpay.component';
import { ShowBasketAdComponent } from './component/show-basket-ad/show-basket-ad.component';
import { NewMoneyTotalComponent } from './component/new-money-total/new-money-total.component';
import { CheckPayComponent } from './component/check-pay/check-pay.component';

// const appRoutes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'longin', component: LoginComponent },
//   { path: 'customer', component: CustomerComponent },
//   { path: 'admin', component: AdminComponent },
// ]


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoginComponent,
    AdminComponent,
    NewComponent,
    NewAdminComponent,
    NewBasketComponent,
    NewEditComponent,
    OrderCusComponent,
    OrderAdComponent,
    ShowBasketCusComponent,
    ErrorInsertComponent,
    NewPayComponent,
    ThanksForpayComponent,
    ShowBasketAdComponent,
    NewMoneyTotalComponent,
    CheckPayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
