import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Album } from '../album';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album',
  imports: [RouterModule, CommonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {

  likes:number = 0;
  service: AlbumService = inject(AlbumService);
  @Input() album! : Album;
  @Output() delete = new EventEmitter<number>();
  @Output() rename = new EventEmitter<number>();

  like(){
    this.likes+=1
  }
  
  deleteItem() {
    this.delete.emit(this.album.id);
  }

  renameItem() {
    this.rename.emit(this.album.id);
  }
}

