import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../auth/service/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-bank-details',
  templateUrl: './admin-bank-details.component.html',
  styleUrl: './admin-bank-details.component.css'
})
export class AdminBankDetailsComponent implements OnInit {

  bankDetail = {
    bankId : '',
    bankName : '',
    bankIfsc : ''
  }
  bankDetailForm: FormGroup = new FormGroup({
    bankName: new FormControl(''),
    bankIfsc: new FormControl('')
  });

  bankLocation = {
    address : '',
    bankDetails : {
      bankId : this.bankDetail.bankId
    }
  }

  bankLocationForm: FormGroup = new FormGroup({
    address: new FormControl(''),
    bankId : new FormControl('')
  });


  get f(): { [key: string]: AbstractControl } {
    return this.bankDetailForm.controls;
  }

  get t(): { [key: string]: AbstractControl } {
    return this.bankLocationForm.controls;
  }

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: AdminService,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.bankDetailForm = this.formBuilder.group(
      {
        bankName: ['', [Validators.required]],
        bankIfsc: ['', [Validators.required]],
      }
    );

    this.bankLocationForm = this.formBuilder.group(
      {
        address: ['', [Validators.required]],
        bankId: [this.bankDetail.bankId, [Validators.required]],
      }
    );

  }


  bankDetailFormSubmit() {
    this.submitted = true
    this.service.addBankDetails(this.bankDetailForm.value).subscribe(res => {
      if (res != null) {
        this.resetForm()
        this.toastr.success('Bank Details Added Successfully', 'Bank Registration Done.');
        this.bankDetail = res;
        this.ngOnInit();
        this.submitted = false;
        this.router.navigate(['/all-bank-details']);
      }
      else {
        this.toastr.error('Please try again.', 'Bank Registration Failed.');
      }
    }, er => {
      this.toastr.info("Bank is already existed! Please try other bank details.", 'Bank Registration Failed');
    });
  }

  bankLocationFormSubmit() {
    this.submitted = true;
    this.bankLocation.bankDetails.bankId=this.bankDetail.bankId;
    // alert(JSON.stringify(this.bankLocation));
    this.service.addBankLocation(this.bankLocation).subscribe(res => {
      if (res != null) {
        this.resetForm()
        this.toastr.success('Bank Location Added Successfully', 'Bank Location Registration Done.');
        this.submitted = false;
        this.router.navigate(['/all-customers']);
      }
      else {
        this.toastr.error('Please try again.', 'Bank Location Registration Failed.');
      }
    }, er => {
      this.toastr.info("Bank Location is already existed! Please try other bank details.", 'Bank Location Registration Failed');
    });
  }

  resetForm() {
    this.bankDetailForm.reset()
    this.submitted = false
  }
}
