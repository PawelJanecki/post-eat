import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { Observable, lastValueFrom, tap } from 'rxjs';
import { AuthState } from './auth/auth.reducers';
import { AuthActions } from './auth/action-types';
import { AuthSelectors } from './auth/selector-types';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'post-eat';
  darkMode: boolean = false;

  isLoggedIn$!: Observable<boolean>;

  constructor(
    private library: FaIconLibrary,
    private angularFireAuth: AngularFireAuth,
    private store: Store<AuthState>,
    private overlay: OverlayContainer
  ) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
    // lastValueFrom(this.angularFireAuth.authState).then(authState => {
    //   if (!!authState) {
    //     this.angularFireAuth.currentUser.then(user => {
    //       this.store.dispatch(
    //         AuthActions.login({
    //           user: {
    //             displayName: user?.displayName!,
    //             email: user?.email!,
    //             uid: user?.uid!,
    //             photoURL: user?.photoURL!,
    //           },
    //         })
    //       );
    //     });
    //   }
    // });

    this.isLoggedIn$ = this.store.pipe(select(AuthSelectors.isLoggedIn));
  }

  modeChanged(event: boolean) {
    this.darkMode = event;
    if (!!event) {
      this.overlay.getContainerElement().classList.add('darkMode');
    } else {
      this.overlay.getContainerElement().classList.remove('darkMode');
    }
  }
}
