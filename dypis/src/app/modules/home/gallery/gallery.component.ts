import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { galleryImages } from 'src/app/utils/data';
import { zoomInLeftAnimation } from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [zoomInLeftAnimation],
})
export class GalleryComponent implements AfterViewInit {
  state = 'start';
  galleryImages = galleryImages;
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  @ViewChild('gallerySection') gallerySection!: ElementRef<HTMLDivElement>;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateAnimationStateOnScroll(
        this.gallerySection?.nativeElement,
        this.state
      );
    }, 0);
  }
}
