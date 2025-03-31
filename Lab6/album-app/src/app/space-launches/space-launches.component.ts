import { Component, inject } from '@angular/core';
import { AlbumService } from '../album.service';
import { Subscription } from 'rxjs';
import { Launch } from '../launch';
import { LaunchComponent } from "../launch/launch.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-space-launches',
  imports: [LaunchComponent, CommonModule],
  templateUrl: './space-launches.component.html',
  styleUrl: './space-launches.component.css'
})
export class SpaceLaunchesComponent {
     list: Launch[] = [];
     private subscription! : Subscription;
     service = inject (AlbumService)
     constructor() {
         this.subscription = this.service.getAllLaunches().subscribe(album_list => {
         this.list = album_list;
        });;
     }
     onFilter(){
      let name = (<HTMLInputElement>document.getElementById('text')).value;
      this.list = this.list.filter(laucnh => laucnh.mission_name.toLowerCase().includes(name.toLowerCase()))
     }
}

