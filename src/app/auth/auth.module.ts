import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CoreModule } from '../core/core.module';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { authFeatureKey, authRecuder } from './auth.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    CoreModule,
    StoreModule.forFeature(authFeatureKey, authRecuder),
    EffectsModule.forFeature([AuthEffects]),
  ],
  exports: [LoginComponent],
})
export class AuthModule {}
