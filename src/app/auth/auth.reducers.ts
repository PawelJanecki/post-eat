import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { AuthActions } from './action-types';
import { User } from './model/user.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User | null;
}

export const initialAuthState: AuthState = {
  user: null,
};

export const authRecuder = createReducer(
  initialAuthState,
  on(AuthActions.loginExistingUser, (state, action) => {
    return {
      user: action.user,
    };
  }),
  on(AuthActions.loginNewUser, (state, action) => {
    return {
      user: action.user,
    };
  }),
  on(AuthActions.update, (state, action) => {
    return {
      user: action.user,
    };
  }),

  on(AuthActions.logout, (state, action) => {
    return {
      user: null,
    };
  })
);
