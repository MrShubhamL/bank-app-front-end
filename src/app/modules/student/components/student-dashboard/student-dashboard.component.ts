import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../../auth/service/storage/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css'
})
export class StudentDashboardComponent implements OnInit {
  constructor(private service: StorageService, private router: Router){}

  ngOnInit(): void {
    this.router.navigate(['/customer-dashboard/home'])
  }

  logout(){
    this.service.logout();
    this.router.navigate(['/login']);
  }
}
