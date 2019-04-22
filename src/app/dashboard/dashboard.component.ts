import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_core/auth.service'
import { FirestoreService } from '../_core/firestore.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  games: {}[]

  constructor(
    private auth: AuthService,
    private firestore: FirestoreService,
    private router: Router
  ) { }

  async ngOnInit() {
    this.games = await this.firestore.games
  }

  signOut() {
    this.auth.signOut()
    this.router.navigate(['/'])
  }

}
