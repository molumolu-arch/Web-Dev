import { Component, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Launch } from '../launch';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-launch',
  imports: [],
  templateUrl: './launch.component.html',
  styleUrl: './launch.component.css'
})
export class LaunchComponent {

  @Input() launch! : Launch;
  @Output() filter = new EventEmitter;

  filterLaunches(){
    this.filter.emit();
  }
}
