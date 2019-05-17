import { Component } from "@angular/core";
import { AuthenticationService, TokenPayload } from "../authentication.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./register.component.html"
})
export class RegisterComponent {
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
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl("/profile");
      },
      err => {
        console.error(err);
      }
    );
  }
}
