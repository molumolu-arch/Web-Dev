import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Album } from './album';
import { Photos } from './photos';
import { Launch } from './launch';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums_url = 'https://jsonplaceholder.typicode.com/albums';
  photos_url = 'https://jsonplaceholder.typicode.com/photos';
  spacex_url = 'https://api.spacexdata.com/v3/launches'
  albumsCache: Album[] | null = null;
 
  constructor(private http: HttpClient) {}

  getAllAlbums(): Observable<Album[]> {
    if (this.albumsCache) {
      return of(this.albumsCache);
    }
    return this.http.get<Album[]>(this.albums_url);
  }
  
  getAlbumById(id:number): Observable<Album> {
    return this.http.get<Album>(`${this.albums_url}/${id}`);
  }

  getPhotosByAlbum(id:number): Observable<Photos[]> {
    return this.http.get<Photos[]>(`${this.photos_url}?albumId=${id}`);
  }

  getAllLaunches(): Observable<Launch[]>  {
    let data =  this.http.get<Launch[]>(`${this.spacex_url}`);
    console.log(data);
    return data;
  }


}
