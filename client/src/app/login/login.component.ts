import { Component } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: TokenPayload = {

    // id: 0,
    // company_name: "",
    // company_pic: "",
    // register_no: "",
    // password: "",
    // address: "",
    // company_cert: "",
    // departments: "",

    id: 0,
    first_name: '',
    last_name: '',
    register_no: '',
    password: ''

  
  }

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/profile')
      },
      err => {
        console.error(err)
      }
    )
  }
}
