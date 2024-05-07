import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth/auth.service';
import { StorageService } from '../../service/storage/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public user = {
    username : '',
    password : ''
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: AuthService,
    private storageService: StorageService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required,]],
      }
    );
  }


  formSubmit() {
    this.submitted = true
    this.service.login(this.form.value).subscribe(res=>{
      if(res!=null){
        this.storageService.saveToken(res.jwtToken);
        this.storageService.getCurrentUser().subscribe(res=>{
          this.storageService.setUser(res);
          console.log(res);
          if(res.customerRole=="ADMIN"){
            this.router.navigate(["/admin-dashboard"]);
            this.submitted=false;
          }
          else if(res.customerRole=="NORMAL"){
            this.router.navigate(["/customer-dashboard"]);
            this.submitted=false;
          }
          else{
            this.toastr.error("Username or Password is incorrect!!", "Invalid Credentials")
            this.submitted=false;
          }
        })
      }
    }, err =>{
      this.submitted=false;
      this.toastr.info("Token has been expired!! Please login again.", "Login Timeout")
      this.storageService.logout();
    })

  }

  resetForm() {
    this.form.reset()
    this.submitted = false
  }
}
