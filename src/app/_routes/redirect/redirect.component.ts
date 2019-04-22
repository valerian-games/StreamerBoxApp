import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../_core/auth.service';
import { switchMap, tap, catchError  } from 'rxjs/operators';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit {

  showError = false

  constructor(private http: HttpClient
    , private route: ActivatedRoute
    , private auth: AuthService) { }

  async ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get('code')
    const error = this.route.snapshot.queryParamMap.get('error')
    const error_description = this.route.snapshot.queryParamMap.get('error_description')

    if (code) {
      const url = `https://us-central1-valerian-games-dev.cloudfunctions.net/token?code=${code}`;

      this.http.post<any>(url, {}).pipe(
        switchMap(res => from(this.auth.customSignIn(res.authToken) ))
      ).subscribe()
    }

    if (error) 
      this.showError = true
    else 
      this.showError = false
  }
}
