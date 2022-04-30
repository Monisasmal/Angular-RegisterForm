import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormData}  from './dash.model'
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  formModelObj: FormData = new FormData;
  allFormData: any;
  signupForm!: FormGroup
  

  constructor( private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private api: ApiService)  { }

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

  addForm() {
    this.formModelObj.firstname = this.signupForm.value.firstname;
    this.formModelObj.lastname = this.signupForm.value.lastname;
    this.formModelObj.email = this.signupForm.value.email;
    this.formModelObj.phoneno = this.signupForm.value.phoneno;
    this.formModelObj.password = this.signupForm.value.password;

    this.api.postForm(this.formModelObj).subscribe(res=>{
      console.log(res);
      alert("Record Added Successful");
    }, 
    err=>{
      alert("Something went Wrong")
    })
  }
  getAllData(){
    this.api.getForm().subscribe((res: any)=>{
      this.allFormData = res;
    })
  }
  deleteForm(data:any){
    this.api.deleteForm(data.id).subscribe(res=>{
      alert("Record Delete")
      this.getAllData();
    })
  }
}
