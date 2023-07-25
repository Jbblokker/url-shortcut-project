import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFunctionsService {
  userUrl?: Observable<object>;
 
  constructor(private firestore: Firestore) { }

  public async addData(urlData: string): Promise<void>{
    const collectionInstance = collection(this.firestore, 'your-shortcuts');
    addDoc(collectionInstance, { 
      url: urlData
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

  //this method allows components to get the result value of the getData method above
  public getUrlHistory():object {
     return this.userUrl
  }
}
