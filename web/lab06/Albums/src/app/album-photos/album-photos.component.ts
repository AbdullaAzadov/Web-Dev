import {Component, OnInit} from '@angular/core';
import {RouterModule, ActivatedRoute, Router} from "@angular/router";
import {AlbumPhoto} from "../album-model";
import {AlbumService} from "../album.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{

  currentAlbum!: AlbumPhoto[];
  loading!: boolean;
  id!: number;
  constructor(private route: ActivatedRoute, private albumService: AlbumService, private router: Router) {
  }

  ngOnInit() {
    this.getCurrent()
  }

  returnBack(){
    this.router.navigateByUrl(`/albums/${this.id}`);
  }

  getCurrent(){
    this.loading = true;
    this.route.paramMap.subscribe((params) =>{
      this.id = Number(params.get('id'));

      this.albumService.getCurrentAlbumPhoto(this.id).subscribe((album) =>{
        this.currentAlbum = album;
        console.log(album)
      })
      this.loading = false;
    })
  }
}
