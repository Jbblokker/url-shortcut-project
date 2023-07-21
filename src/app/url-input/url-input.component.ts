import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FirebaseFunctionsService } from '../services/firebase-functions.service';
@Component({
  selector: 'app-url-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss']
})
export class UrlInputComponent {
  urlInput?: string;

  constructor(private firebase: FirebaseFunctionsService) {

  }
  public sendUrlData(url: any): void {
    this.urlInput = ''
    this.firebase.addData(url)
  }
}
