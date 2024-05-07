import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { StorageService } from '../../../../auth/service/storage/storage.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-admin-all-customers',
  templateUrl: './admin-all-customers.component.html',
  styleUrl: './admin-all-customers.component.css'
})
export class AdminAllCustomersComponent implements OnInit{
  constructor(
    private service: AdminService, 
    private authService: StorageService,
    private router: Router,
    private toaster: ToastrService){}
    status:Boolean = false;
    action:Boolean = true;
    loadData:Boolean = false;
  customer = [
    {
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
  ]
  ngOnInit(): void {
    this.loadData = true;
    this.service.getAllCustomers().subscribe(res=>{
      this.customer = res;
      this.loadData = false;
      console.log(this.customer);
    }, error=>{
      alert(JSON.stringify(error));
      // this.authService.logout();
      // this.router.navigate(['/login'])
    });
  }

  activationStatus(id:any){
    this.action=false;
    this.service.setEnabled(id).subscribe(res=>{
      this.toaster.success("Customer is activated.", "Activation Successful");
      this.ngOnInit();
      this.status=true;
      this.action=true;
    },err=>{
      this.toaster.error("Server is not responding. Please try again.", "Server busy!");
    })
  }

  deActivationStatus(id:any){
    this.action=false;
    this.service.setDisabled(id).subscribe(res=>{
      this.toaster.warning("Customer is diactivated.", "Deactivation Successful");
      this.ngOnInit();
      this.status=true;
      this.action=true;
    },err=>{
      this.toaster.error("Server is not responding. Please try again.", "Server busy!");
    })
  }

}
