import { Component } from '@angular/core';
import { AlbumService } from '../album.service';
import { inject } from '@angular/core';
import { Album } from '../album';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from "../album/album.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-albums',
  imports: [AlbumComponent, CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {

  private subscription! : Subscription;
  album_service = inject(AlbumService);
  album_list: Album[] = [];

  constructor() {

      this.subscription = this.album_service.getAllAlbums().subscribe(album_list => {
      this.album_list = album_list;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
