import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-url-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.scss']
})
export class UrlInputComponent {
  originalUrl = new FormControl('')

}
