import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from '../../../helper';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  public getAllCustomers(): Observable<any> {
    return this.http.get(baseUrl + "/admin/allCustomers");
  }

  public setEnabled(id: any): Observable<any> {
    return this.http.post(baseUrl + `/admin/enableCustomer/${id}`, id);
  }

  public setDisabled(id: any): Observable<any> {
    return this.http.post(baseUrl + `/admin/disableCustomer/${id}`, id);
  }

  // All Account Service Functions

  public getAllAccounts(): Observable<any> {
    return this.http.get(baseUrl + "/admin/allAccounts");
  }

  public setEnabledAccount(id: any): Observable<any> {
    return this.http.post(baseUrl + `/admin/enableAccount/${id}`, id);
  }

  public setDisableddAccount(id: any): Observable<any> {
    return this.http.post(baseUrl + `/admin/disableAccount/${id}`, id);
  }

  // Bank Details Services
  public addBankDetails(bank: any): Observable<any> {
    return this.http.post(baseUrl + "/admin/addBank", bank);
  }
  public addBankLocation(bankLocation: any): Observable<any> {
    return this.http.post(baseUrl + "/admin/addBankLocation", bankLocation);
  }
  public getBankByIFSCCode(code: any): Observable<any> {
    return this.http.get(baseUrl + `/admin/getBankByIFSC/${code}`);
  }
}
