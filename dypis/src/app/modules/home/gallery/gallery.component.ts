import { Component, OnInit } from '@angular/core';
import { galleryImages } from 'src/app/utils/data';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  galleryImages = galleryImages;
  constructor() {}

  ngOnInit(): void {}
}
