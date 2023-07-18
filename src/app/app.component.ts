import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'url-shortcut-project';
  userUrl?: Observable<any>;

  constructor(private firestore: Firestore){
    this.getData()
  }


  getData() {
    const urlCollection = collection(this.firestore, 'your-shortcuts')
    collectionData(urlCollection).subscribe(val => {
      console.log(val)
    })

    this.userUrl = collectionData(urlCollection);
  }
}
