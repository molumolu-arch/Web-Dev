import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../album';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [RouterModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route: ActivatedRoute = inject (ActivatedRoute);
  album_service = inject (AlbumService);
  album: Album | undefined;

    constructor() {
      const id = Number(this.route.snapshot.params['id'])
      this.album_service.getAlbumById(id).subscribe(album => {
        this.album = album;
      });
    }

}
