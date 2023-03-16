import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private _Router:Router) { }

  registerForm: FormGroup = new FormGroup({
    first_name:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name:new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email:new FormControl("", [Validators.required, Validators.email]),
    password:new FormControl("", [Validators.required]),
  })
  navigateToLogin(){
    this._Router.navigate(["registration/login"])
  }
  logError(err:any){
    console.log(err);
    
  }
  ngOnInit(): void {
  }

}
