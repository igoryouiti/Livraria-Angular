import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = this.fb.group({
    'email': [''],
    'password': ['']
  })

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formLogin.value)
  }

  goBack() {
    this.router.navigate(['products'])
  }

}
