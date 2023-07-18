import { Component } from '@angular/core';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  public gallerys:any=[];
  constructor(private galleryservice:GalleryService){

    galleryservice.getgallery().subscribe(
      (data:any)=>{
        this.gallerys=data.data.memes
      },
      (arr:any)=>{
        alert("server unavailable")
      }
    )

  }

}
