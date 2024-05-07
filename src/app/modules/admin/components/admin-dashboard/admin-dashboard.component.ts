import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { StorageService } from '../../../../auth/service/storage/storage.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  constructor(private service: StorageService, private router: Router){}

  logout(){
    this.service.logout();
    this.router.navigate(['/login']);
  }

}
