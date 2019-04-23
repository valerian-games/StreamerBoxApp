import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private afs: AngularFirestore
  ) { }

  get games() {
    return this.afs.collection('games').valueChanges().pipe(first()).toPromise()
  }

  get commands() {
    return this.afs.collection('commands', ref => ref.orderBy('command', 'desc')).valueChanges().pipe(first()).toPromise()
  }
}
