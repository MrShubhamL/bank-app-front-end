import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-all-accounts',
  templateUrl: './admin-all-accounts.component.html',
  styleUrl: './admin-all-accounts.component.css'
})
export class AdminAllAccountsComponent implements OnInit{

  constructor(private service: AdminService){}
  loadData:Boolean = false;
  
  ngOnInit(): void {
    this.service.getAllAccounts().subscribe(res=>{
      console.log(JSON.stringify(res));
    })
  }



}
