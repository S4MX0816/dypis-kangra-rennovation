import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { zoomInLeftAnimation } from 'src/app/utils/animation';
import { updateAnimationStateOnScroll } from 'src/app/utils/helpers';
import { GalleryService } from './gallery.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [zoomInLeftAnimation],
})
export class GalleryComponent implements AfterViewInit {
  state = 'start';
  galleryImages = this.galleryService.gallery;
  updateAnimationStateOnScroll = updateAnimationStateOnScroll;
  @ViewChild('gallerySection') gallerySection!: ElementRef<HTMLDivElement>;

  constructor(private readonly galleryService: GalleryService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateAnimationStateOnScroll(
        this.gallerySection?.nativeElement,
        this.state
      );
    }, 0);
  }
}
