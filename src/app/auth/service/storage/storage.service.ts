import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import baseUrl from '../../../helper';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

constructor(private http: HttpClient) { }

 //Login user: set token in local storage
 public saveToken(token:any){
  if(typeof window !== 'undefined'){
    window.localStorage.setItem("token",token);
    return true;
  }
  return false;
}

// User is Login or Not
public isLoggedIn(){
  if(typeof window !== 'undefined'){
    let tokenStr=localStorage.getItem("token");
    
    if(tokenStr==undefined || tokenStr == '' || tokenStr==null){
      return false;
    }
    else{
      return true;
    }
  }
  return false;
}

// Log out user : remove token from local storage
public logout(){
  if(typeof window !== 'undefined'){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return true;
  }
  return false;
}

//If we want to get token from localstorage
public getToken(){
  if(typeof window !== 'undefined'){
    return localStorage.getItem("token");
  }
  return null;
}

// Setting user details
public setUser(user:any){
  if(typeof window !== 'undefined'){
    localStorage.setItem("user",JSON.stringify(user));
  }
}

// Getting user Details
public getUser(){
  if(typeof window !== 'undefined'){
    let userStr = localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }
}

// Getting user Role
public getUserRole(){
  if(typeof window !== 'undefined'){
    let user = this.getUser();
    return user.customerRole;
  }
}


// Current User Details..
public getCurrentUser():Observable<any>{
  return this.http.get(`${baseUrl}/api/server/current-user`);
}

public isTokenExpired():Observable<any>{
  return this.http.get(baseUrl + "");
}





}
