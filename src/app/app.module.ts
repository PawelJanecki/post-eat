import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { RecipeService } from './recipe/service/recipe.service';

const firebaseConfig = {
  apiKey: 'AIzaSyCi7LpsIn7r7PuzYe--sP3qVf2j_hjrbnU',
  authDomain: 'post-eat-ee093.firebaseapp.com',
  databaseURL: 'https://post-eat-ee093-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'post-eat-ee093',
  storageBucket: 'post-eat-ee093.appspot.com',
  messagingSenderId: '707482962326',
  appId: '1:707482962326:web:53002a3cac213caadaf5b7',
  measurementId: 'G-MGET13JDJX',
};

const routes: Routes = [
  {
    path: 'recipes',
    loadChildren: () => import('./recipe/recipe.module').then(module => module.RecipeModule),
    canActivate: [],
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(module => module.UserModule),
    canActivate: [],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
    CoreModule,
    AuthModule,
    RouterModule.forRoot(routes),

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,

    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
