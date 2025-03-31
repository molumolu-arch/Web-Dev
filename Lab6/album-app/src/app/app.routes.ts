import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { AlbumsComponent } from "./albums/albums.component";
import { DetailsComponent } from "./details/details.component";
import { PhotosComponent } from "./photos/photos.component";
import { SpaceLaunchesComponent } from "./space-launches/space-launches.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'About Page'
    },
    {
        path: 'albums',
        component: AlbumsComponent,
        title: 'Albums Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    },
    {
        path: 'albums/:id/photos',
        component: PhotosComponent,
        title: 'Photos Page'
    },{
        path: 'launches',
        component: SpaceLaunchesComponent,
        title: 'Launches'
    }

    
];
