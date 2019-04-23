import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  signInWithTwitch() {
    window.location.href = "https://us-central1-valerian-games-dev.cloudfunctions.net/oAuthRedirect";

  }
  async customSignIn(token: string) {
    await this.afAuth.auth.signInWithCustomToken(token)
    this.router.navigate(['/dashboard']);
  }

  getIdToken() {
    return this.afAuth.auth.currentUser.getIdToken()
  }

  signOut() {
    this.afAuth.auth.signOut()
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  get uid() {
    return this.afAuth.user.pipe(first()).toPromise().then(e => e.uid)
  }
}
