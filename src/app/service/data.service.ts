import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiEndpoint = 'http://localhost/webapi_food';
  constructor() { }
}
