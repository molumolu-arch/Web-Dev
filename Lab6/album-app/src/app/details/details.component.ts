import { Component, inject, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../album';
import { EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [RouterModule, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  @Output() rename = new EventEmitter<{id:number, newname:string}>();
  route: ActivatedRoute = inject (ActivatedRoute);
  album_service = inject (AlbumService);
  album: Album | undefined;

    constructor() {
      const id = Number(this.route.snapshot.params['id'])
      this.album_service.getAlbumById(id).subscribe(album => {
        this.album = album;
      });
    }

    renameItem(){
      const newName = (<HTMLInputElement>document.getElementById('newname')).value;
      if (this.album) {
        this.album.title = newName; 
      }
    }
}
