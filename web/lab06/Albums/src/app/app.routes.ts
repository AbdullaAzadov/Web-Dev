import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full", title: "Home"},
  { path: "home", component: HomeComponent, title: "Home" },
  { path: "about", component: AboutComponent, title: "About" },
  { path: "albums", component: AlbumsComponent, title: "Albums" },
  { path: "albums/:id", component: AlbumDetailComponent, title: "Album Details" },
  { path: "albums/:id/photos", component: AlbumPhotosComponent, title: "Album Photos" },
  { path: "**", component: NotfoundComponent, title: "Page Not Found" },
];
