import {Component, OnInit} from '@angular/core';
import {RouterModule, ActivatedRoute, Router} from "@angular/router";
import {Album} from "../album-model";
import {AlbumService} from "../album.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit{

  currentAlbum!: Album;
  loading: boolean = true;
  id!: number;
  title: string = '';
  constructor(private route: ActivatedRoute, private albumService: AlbumService, private router: Router) {
  }

  ngOnInit() {
    this.getCurrent()
  }

  returnBack(){
    this.router.navigateByUrl('/albums');
  }

  getCurrent(){
    this.route.paramMap.subscribe((params) =>{
      this.id = Number(params.get('id'));

      this.albumService.getCurrentAlbum(this.id).subscribe((album) =>{
        this.currentAlbum = album;
      })
      this.title = '';
    })
    this.loading = false;
  }

  setTitle(){
    this.albumService.updateCurrentAlbum();
    this.currentAlbum.title = this.title;
  }

}
