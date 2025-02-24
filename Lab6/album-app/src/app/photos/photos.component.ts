import { Component } from '@angular/core';
import { Photos } from '../photos';
import { AlbumService } from '../album.service';
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoComponent } from "../photo/photo.component";
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-photos',
  imports: [PhotoComponent, CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {

  private subscription! : Subscription;
  photos: Photos[] = []; 
  service: AlbumService = inject (AlbumService);
  route: ActivatedRoute = inject (ActivatedRoute);
  
  constructor() {
    const id = Number(this.route.snapshot.params['id']);
    this.subscription = this.service.getPhotosByAlbum(id).subscribe(photos_list => {
      this.photos = photos_list;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
