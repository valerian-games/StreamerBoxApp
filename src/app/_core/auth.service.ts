import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  signInWithTwitch() {
    // window.location.href = "http://stackoverflow.com";
    const popup = window.open('https://us-central1-valerian-games-dev.cloudfunctions.net/oAuthRedirect', '_blank', 'height=700,width=800')
  }
  customSignIn(token: string) {
    console.log('test')
    return this.afAuth.auth.signInWithCustomToken(token).then(() => window.close() )
  }

  closeWindow() {
    window.close()
  }


  getIdToken() {
    return this.afAuth.auth.currentUser.getIdToken()
  }

  signOut() {
    this.afAuth.auth.signOut()
  }
}
