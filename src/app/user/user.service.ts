import { Injectable } from '@angular/core';
import { User } from '../auth/model/user.model';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userCollectionRef!: AngularFireList<any>;
  private userDocumentRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {
    this.userCollectionRef = this.db.list('users');
  }

  getAll() {
    return this.userCollectionRef;
  }

  getUser(uid: string) {
    this.userDocumentRef = this.db.object('users/' + uid);
    return this.userDocumentRef;
  }

  createUser(user: User) {
    this.userCollectionRef.set(user.uid, {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    } as User);
  }

  updateUser(data: Partial<any>) {
    this.userDocumentRef.update(data);
  }
}
