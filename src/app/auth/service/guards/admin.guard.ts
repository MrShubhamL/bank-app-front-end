import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})

class PermissionService {
  constructor(private router: Router, private storageService: StorageService){}
  canActivate(): boolean {
    if(this.storageService.isLoggedIn() && this.storageService.getUserRole()=="ADMIN"){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}

export const adminGuard: CanActivateFn = (route, state) => {
  return inject(PermissionService).canActivate();
};
