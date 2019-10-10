import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from "@angular/forms";
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {

 
  userForm:FormGroup;
  FirstName:string='';
  LastName:string='';
  Email:string='';
  // Phone:number;


  constructor(private formbuilder:FormBuilder) {

    this.userForm=formbuilder.group({
      firstName:new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(6)]),
      lastName:new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(6)] ),
      email:new FormControl('', [Validators.required,Validators.email]),
      phone:new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^[6-9]\d{9}$/)]),
      gender: new FormControl('', Validators.required),
    });


   }
   formSubmitted(data) {
		console.log(JSON.stringify(data));	
	}
  ngOnInit() {
  }
  // PostData(userForm:any){
  //   this.FirstName=userForm.controls.firstName.value;
  //   this.LastName=userForm.controls.lastName.value;
  //   this.Email=userForm.controls.email.value;
  //   // this.Phone=userForm.controls.phone.value;
  //   console.log(this.FirstName);
  //   console.log(userForm.controls);
  // }
}
