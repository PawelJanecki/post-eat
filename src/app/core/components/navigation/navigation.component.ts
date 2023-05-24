import { Component, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/app/auth/auth.reducers';
import { User } from 'src/app/auth/model/user.model';
import { AuthSelectors } from 'src/app/auth/selector-types';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthActions } from 'src/app/auth/action-types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Output() modeEvent = new EventEmitter<boolean>();

  darkMode: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(result => result.matches),
    shareReplay()
  );
  isWeb$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Web).pipe(
    map(result => result.matches),
    shareReplay()
  );

  currentUser$: Observable<User | null>;

  // icon: string = 'fa-bars';

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<AuthState>,
    private angularFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.currentUser$ = store.pipe(select(AuthSelectors.currentUser));
  }

  changeMode(event: boolean) {
    this.darkMode = event;
    this.modeEvent.emit(event);
  }

  logout() {
    this.angularFireAuth.signOut().then(() => this.store.dispatch(AuthActions.logout()));
  }

  redirectToUser() {
    this.router.navigate(['user']);
  }

  navigateToRecipes() {
    // alert('TODO: podstrona z gotowymi przepisami');
    this.router.navigate(['recipes']);
  }

  navigateToInspirations() {
    alert('TODO: podstrona z inspiracjami');
  }
}
