import { Component } from '@angular/core';

import { galleryImages } from 'src/app/utils/data';
import { zoomInLeftAnimation } from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [zoomInLeftAnimation],
})
export class GalleryComponent {
  state = 'start';
  galleryImages = galleryImages;
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;

  constructor() {}
}
