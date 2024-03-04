import {Component, OnInit} from '@angular/core';
import {Album} from "../album-model";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {AlbumService} from "../album.service";
import {routes} from "../app.routes";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [ CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit{

  Albums!: Album[];
  loading: boolean = false;

  constructor(private albumService: AlbumService ) {}

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums(){
    this.loading = true;

    this.albumService.getAlbums().subscribe((params) => {
      this.Albums = params
      this.loading = false;
      }
    )
  }

  deleteAlbum(id: number){
    this.Albums = this.Albums.filter((Albums) => Albums.id !== id);
    this.albumService.deleteAlbumById(id).subscribe();
  }

}
