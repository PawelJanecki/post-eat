import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.scss'],
})
export class UploadImgComponent {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private dialogRef: MatDialogRef<UploadImgComponent>) {}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  close() {
    this.dialogRef.close();
  }

  upload() {}

  uploadCroppedImage() {
    this.dialogRef.close(this.croppedImage);
  }
}
