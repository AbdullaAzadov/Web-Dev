import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album, AlbumPhoto} from "./album-model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>("https://jsonplaceholder.typicode.com/albums")
  }

  getCurrentAlbum(id: number):Observable<Album> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  getCurrentAlbumPhoto(id: number):Observable<AlbumPhoto[]> {
    return this.client.get<AlbumPhoto[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

  deleteAlbumById(id: number){
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  updateCurrentAlbum(){
    this.client.put(`https://jsonplaceholder.typicode.com/albums/100`, {
      "userId": 10,
      "id": 100,
      "title": "New Title",
      "body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
    }, )
  }


}
