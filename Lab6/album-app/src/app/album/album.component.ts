import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Album } from '../album';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-album',
  imports: [RouterModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {

  service: AlbumService = inject(AlbumService);
  @Input() album! : Album;

}

