
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from '../../../helper';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http: HttpClient){}

  public createAccount(account:any):Observable<any>{
    return this.http.post(baseUrl + "/customer/addAccount", account);
  }

  public getBankDetails():Observable<any>{
    return this.http.get(baseUrl + "/customer/getBankDetails");
  }
}
