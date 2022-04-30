import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../shared/api.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  formModelObj: FormData = new FormData;
  allFormData: any;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      phoneno: [''],
      password: ['']
    })
    this.getAllData()
  }
  
  
  signUp() {
    this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res => {
      alert("Registration Successfull");
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert("Something went wrong")
    })
  }
  getAllData(){
    this.api.getForm().subscribe(res=>{
      this.allFormData = res;
    })
  }
  
}
