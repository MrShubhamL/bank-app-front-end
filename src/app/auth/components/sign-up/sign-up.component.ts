import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { AuthService } from '../../service/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    contact: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name: ['', [Validators.required]],
        username: ['', [Validators.required, Validators.email]],
        contact: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmPassword")
      }
    );
  }


  formSubmit() {
    this.submitted = true
    this.service.register(this.form.value).subscribe(res => {
      if (res != null) {
        this.resetForm()
        this.toastr.success('You are successfully regiseter for Money Bank.', 'Registration Done.');
        this.submitted = false;
        this.router.navigate(['/login']);
      }
      else {
        this.toastr.error('Please try again.', 'Registration Failed.');
      }
    }, er => {
      this.toastr.info("Email is already exist! Please try other email.", 'Registration Failed');
    });
  }

  resetForm() {
    this.form.reset()
    this.submitted = false
  }

}
