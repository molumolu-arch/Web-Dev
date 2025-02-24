import { Component } from '@angular/core';
import { Photos } from '../photos';
import { Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  imports: [],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
     @Input() photo! : Photos;
}
