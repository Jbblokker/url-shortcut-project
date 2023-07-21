import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseFunctionsService } from '../services/firebase-functions.service';

@Component({
  selector: 'app-url-history-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './url-history-display.component.html',
  styleUrls: ['./url-history-display.component.scss']
})
export class UrlHistoryDisplayComponent implements OnInit {
   urlList: any
 
  constructor(private firebase : FirebaseFunctionsService){
  }
  ngOnInit(): void {
    this.OldUrlHistory()
    this.urlList = this.firebase.getUrlHistory();
    console.log(this.urlList);
  }

  OldUrlHistory(){
   this.firebase.getData()
  }

}
