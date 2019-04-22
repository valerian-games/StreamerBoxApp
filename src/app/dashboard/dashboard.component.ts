import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_core/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signOut() {
    this.auth.signOut()
    this.router.navigate(['/'])
  }

}
