import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { UploadImgComponent } from './upload-img/upload-img.component';
import { ImageCropperModule } from 'ngx-image-cropper';

const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatRippleModule,
  MatCardModule,
  MatTooltipModule,
  MatDialogModule,
];

@NgModule({
  declarations: [UploadImgComponent],
  imports: [CommonModule, ...materialModules, FontAwesomeModule, ImageCropperModule],
  exports: [...materialModules, FontAwesomeModule, UploadImgComponent],
})
export class SharedModule {}
