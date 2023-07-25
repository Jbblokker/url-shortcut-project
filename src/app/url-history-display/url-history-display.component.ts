import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirebaseFunctionsService } from '../services/firebase-functions.service';
import { Clipboard } from '@angular/cdk/clipboard';
 

@Component({
  selector: 'app-url-history-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './url-history-display.component.html',
  styleUrls: ['./url-history-display.component.scss']
})
export class UrlHistoryDisplayComponent implements OnInit {
   urlList: any
 
  constructor(public firebase : FirebaseFunctionsService, public clipboard : Clipboard){
  }
  ngOnInit():void{
    this.OldUrlHistory()
    this.urlList = this.firebase.getUrlHistory();
  }

  //this method gets data from firebase to display all condensed urls 
  public OldUrlHistory():void{
   this.firebase.getData()
  }

  //this method allows user to copy url after clicking the clipboard icon
  public copyToClipboard(url: HTMLElement):void {
    const text: string = url.textContent || '';
    console.log(text);
    const successfulCopy = this.clipboard.copy(text);
  }

}
