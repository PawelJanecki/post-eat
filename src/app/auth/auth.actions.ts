import { createAction, props } from '@ngrx/store';
import { User } from './model/user.model';

export const loginExistingUser = createAction('[Login page] User Login', props<{ user: User }>());

export const loginNewUser = createAction('[Login page] User Login', props<{ user: User }>());

export const update = createAction('[User details page] User Data Update', props<{ user: User }>());

export const logout = createAction('[Top Menu] User Logout');
