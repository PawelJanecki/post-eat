import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { base64ToFile } from 'ngx-image-cropper';
import { Observable, map, take } from 'rxjs';
import { AuthState } from 'src/app/auth/auth.reducers';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/model/user.model';
import { AuthSelectors } from 'src/app/auth/selector-types';
import { StorageService } from 'src/app/core/services/storage.service';
import { UploadImgComponent } from 'src/app/shared/upload-img/upload-img.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent {
  currentUser$: Observable<User | null>;

  constructor(
    private store: Store<AuthState>,
    private dialog: MatDialog,
    private storageService: StorageService,
    private userService: UserService
  ) {
    this.currentUser$ = store.pipe(select(AuthSelectors.currentUser));
  }

  editAvatar() {
    const dialog = this.dialog.open(UploadImgComponent);

    dialog.afterClosed().subscribe(async result => {
      if (result) {
        this.uploadAvatar(result);
      }
    });
  }

  async uploadAvatar(base64File: string) {
    this.currentUser$.pipe(take(1)).subscribe(user => {
      if (user) {
        this.storageService
          .upload(`${user?.uid}/avatar.png`, base64ToFile(base64File))
          .then(async snapshot => {
            this.userService.updateUser({ photoURL: await snapshot.ref.getDownloadURL() });
          });
      }
    });
  }
}
