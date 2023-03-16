import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _Router:Router) { }

  loginForm:FormGroup = new FormGroup({
    email:new FormControl("", [Validators.required, Validators.email]),
    password:new FormControl("", [Validators.required]),
  })

  navigateToMovies(){
    this._Router.navigate(["/movies"])
  }

  ngOnInit(): void {
  }

}
