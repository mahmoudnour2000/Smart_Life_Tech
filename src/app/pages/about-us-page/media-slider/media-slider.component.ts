import { Component, OnInit } from '@angular/core';
import { Slide } from '../../../core/models/about-us';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-media-slider',
  imports:[CommonModule, TranslateModule],
  templateUrl: './media-slider.component.html',
  styleUrls: ['./media-slider.component.css']
})
export class MediaSliderComponent  {

  constructor(private sanitizer: DomSanitizer) { }

  currentSlide = 0;

  get currentMedia() {
    return {
      type: this.currentSlide % 2 === 0 ? 'video' : 'image',
      url: this.currentSlide % 2 === 0 ? 'https://www.youtube.com/embed/2zYVv3AiNq4?si=wG3gWKCMfetIuH9E' : 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      title: 'aboutUs.media.items.' + this.currentSlide + '.title'
    };
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % 4;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + 4) % 4;
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

 getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
