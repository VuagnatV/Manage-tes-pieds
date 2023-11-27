import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<firebase.default.User | null>;

  constructor(private afAuth: AngularFireAuth,) {
    this.user$ = afAuth.authState;
  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then((data) => {
        //this.router.navigate(['/']);
        console.log(data)
      })
      .catch(error => {
        console.error(error);
      });
  }

  register(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((data) => {
        console.log(data)

      })
      .catch(error => {
        console.error(error);
      });
  }
}
