import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private fireStorage: AngularFireStorage) {}

  upload(path: string, file: Blob) {
    return this.fireStorage.upload(path, file);
  }

  load(uid: string, fileName: string) {
    return this.fireStorage.ref(`${uid}/${fileName}`).getDownloadURL();
  }
}
