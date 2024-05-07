import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth/service/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { StorageService } from '../../../../auth/service/storage/storage.service';
import { StudentServiceService } from '../../services/student-service.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrl: './new-account.component.css'
})
export class NewAccountComponent implements OnInit {

  selectedValue: string | undefined;

  accountDetails = {
    accountTpe : '',
    accountNumber : '',
    accountBalance : '',
    customers : {
      customerId : ''
    },
    bankDetails : [
      {
        bankId : ''
      }
    ]
  }

  customer = {
    customerId : ''
  }

  bankDetail = [
    {
      bankId : '',
      bankName : '',
      bankIfsc : ''
    }
  ]

  form: FormGroup = new FormGroup({
    accountTpe: new FormControl(''),
    accountNumber: new FormControl(''),
    accountBalance: new FormControl(''),
    bankDetails: new FormControl(''),
  });

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: StorageService,
    private custService: StudentServiceService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        accountTpe: ['', [Validators.required]],
        accountNumber: ['', [Validators.required]],
        accountBalance: ['', [Validators.required]],
        bankDetails: ['', [Validators.required]],
      }
    );
    this.customer = this.service.getUser();
    this.accountDetails.customers.customerId = this.customer.customerId;
    this.custService.getBankDetails().subscribe(res=>{
      this.bankDetail = res;
    }, err=>{
      alert(JSON.stringify(err));
    })
  }


  formSubmit() {
    this.submitted = true
    alert(JSON.stringify(this.accountDetails));
    // this.custService.createAccount(this.accountDetails).subscribe(res=>{
    //   console.log(res);
    // },err=>{
    //   alert(JSON.stringify(err));
    // })

  }

  resetForm() {
    this.form.reset()
    this.submitted = false
  }
}
