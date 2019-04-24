import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_core/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedIn = false

  constructor(public auth: AuthService) { }

  async ngOnInit() {
    let hey = await this.auth.isLoggedIn()
    
    if (hey != null)
      this.loggedIn = true
  }

}
