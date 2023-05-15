import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, authFeatureKey } from './auth.reducers';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const isLoggedIn = createSelector(selectAuthState, (auth: AuthState) => !!auth.user);

export const currentUser = createSelector(selectAuthState, (auth: AuthState) => auth.user);
