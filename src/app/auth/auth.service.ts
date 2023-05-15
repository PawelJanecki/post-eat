import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { AuthState } from './auth.reducers';
import { Store } from '@ngrx/store';
import { AuthActions } from './action-types';
import { User } from './model/user.model';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private router: Router,
    private store: Store<AuthState>,
    private userService: UserService
  ) {}

  googleAuth() {
    return this.authLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      console.log('LOGGED IN BY GOOGLE.', res);
    });
  }

  authLogin(provider: any) {
    return this.angularFireAuth
      .signInWithPopup(provider)
      .then(async result => {
        let user = await this.angularFireAuth.currentUser;

        const userFromDb = await this.userService.getUser(user?.uid!);
        userFromDb.valueChanges().subscribe(res => this.dispatchUpdate(res));
        const userFromDbValue = <User>(await userFromDb.query.get()).toJSON();

        if (!!userFromDbValue) {
          this.dispatchLoginExistingUser(userFromDbValue);
        } else {
          const newUser: User = {
            uid: user?.uid!,
            displayName: user?.displayName!,
            email: user?.email!,
            photoURL: user?.photoURL!,
          };
          this.userService.createUser(newUser);
          this.dispatchLoginNewUser(newUser);
        }

        return result;
      })
      .catch(err => {
        window.alert(err);
      });
  }

  dispatchLoginExistingUser(user: User) {
    this.store.dispatch(
      AuthActions.loginExistingUser({
        user: {
          uid: user?.uid!,
          displayName: user?.displayName!,
          email: user?.email!,
          photoURL: user?.photoURL!,
        },
      })
    );
  }

  dispatchLoginNewUser(user: User) {
    this.store.dispatch(
      AuthActions.loginNewUser({
        user: {
          uid: user?.uid!,
          displayName: user?.displayName!,
          email: user?.email!,
          photoURL: user?.photoURL!,
        },
      })
    );
  }

  dispatchUpdate(user: User) {
    this.store.dispatch(
      AuthActions.update({
        user: {
          uid: user?.uid!,
          displayName: user?.displayName!,
          email: user?.email!,
          photoURL: user?.photoURL!,
        },
      })
    );
  }
}
