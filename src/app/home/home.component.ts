import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  details: UserDetails

  constructor(private auth: AuthenticationService){ }

  ngOnInit() {
    this.auth.home().subscribe(
      user => {
        this.details = user
      },
      err => {
        console.error(err)
      }
    )
  }
}
