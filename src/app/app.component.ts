import { Component, OnInit } from '@angular/core';
import { StorageService } from './auth/service/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
    private storageService: StorageService
  ) {}
  
  title = 'operations';

  userDetails = {
    accountNonExpired : '',
    accountNonLocked : '',
    accounts : '',
    authorities : [
      { 
        authority: '' 
      }
    ],
    contact : '',
    credentialsNonExpired : '',
    customerId : '',
    customerRegistrationDate : '',
    customerRole : '',
    enabled : '',
    name : '',
    password : '',
    username : '',
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event.constructor.name == "NavigationEnd") {
        this.userDetails = this.storageService.getUser();
      }
    });
  }

  logout() {
    this.storageService.logout();
    this.router.navigate(['/login'])
    this.ngOnInit();
  }

}
