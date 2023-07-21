import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFunctionsService {
  userUrl?: Observable<any>;

  constructor(private firestore: Firestore) { }

  public async addData(urlData: any): Promise<void>{
    const collectionInstance = collection(this.firestore, 'your-shortcuts');
    addDoc(collectionInstance, { 
      newUrl: 'waiting',
      oldUrl: urlData.value || null
    })
    .then(() => {
      console.log('saved successfully')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  public getData():void {
    const urlCollection = collection(this.firestore, 'your-shortcuts')
    collectionData(urlCollection).subscribe(val => {
      console.log(val)
    })
    this.userUrl = collectionData(urlCollection);
  }

  public getUrlHistory(){
     return this.userUrl
  }
}
