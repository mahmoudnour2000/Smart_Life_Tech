import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { LifestyleItem } from '../../../core/models/home-sections';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-lifestyle-section',
  templateUrl: './lifestyle-section.component.html',
  styleUrls: ['./lifestyle-section.component.css'],
  imports: [ButtonComponent,CommonModule, TranslateModule]
})
export class LifestyleSectionComponent implements OnInit {
 @Input() title: string = 'Create Your Way of Living';
  @Input() description: string = 'Introducing the future of homes, where high-end technology meets ultimate comfort. Intelligent systems, elegant design, and unlimited control... Every detail is designed to fit your luxurious lifestyle.';
  @Input() buttonText: string = 'More';
  @Input() buttonRoute: string = '/lifestyle';
  @Input() ariaLabel: string = 'Lifestyle gallery section';
  @Input() autoPlay: boolean = false;
  @Input() autoPlayInterval: number = 5000;
  
  @Input() items: LifestyleItem[] = [
    { image: 'assets/images/sliderHome1.png', alt: 'Modern smart home table with control device' },
    { image: 'assets/images/sliderHome2.png', alt: 'Elegant dining setup with smart technology' },
    { image: 'assets/images/sliderHome3.png', alt: 'Luxury living room with smart lighting' },
    { image: 'assets/images/sliderHome1.png', alt: 'Smart home bedroom setup' },
    { image: 'assets/images/sliderHome2.png', alt: 'Modern kitchen with automation' },
    { image: 'assets/images/sliderHome3.png', alt: 'Intelligent bathroom solutions' }
  ];

  currentSlide: number = 0;
  itemsPerView: number = 3;
  maxSlide: number = 0;
  private autoPlayTimer?: number;

  ngOnInit(): void {
    this.calculateItemsPerView();
    this.calculateMaxSlide();
    if (this.autoPlay) {
      this.startAutoPlay();
    }

    // Recalculate on window resize
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        this.calculateItemsPerView();
        this.calculateMaxSlide();
        // Reset slide if out of bounds
        if (this.currentSlide > this.maxSlide) {
          this.currentSlide = this.maxSlide;
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', () => {});
    }
  }

  calculateItemsPerView(): void {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 767) {
        this.itemsPerView = 1;
      } else if (screenWidth <= 991) {
        this.itemsPerView = 2;
      } else {
        this.itemsPerView = 3;
      }
    } else {
      this.itemsPerView = 3; // Default for SSR
    }
  }

  calculateMaxSlide(): void {
    this.maxSlide = Math.max(0, this.items.length - this.itemsPerView);
  }

  nextSlide(): void {
    this.currentSlide++;
    if (this.currentSlide > this.maxSlide) {
      this.currentSlide = 0; // Loop back to start
    }
    this.resetAutoPlay();
  }

  previousSlide(): void {
    this.currentSlide--;
    if (this.currentSlide < 0) {
      this.currentSlide = this.maxSlide; // Loop to end
    }
    this.resetAutoPlay();
  }

  startAutoPlay(): void {
    if (typeof window !== 'undefined') {
      this.autoPlayTimer = window.setInterval(() => {
        if (this.currentSlide >= this.maxSlide) {
          this.currentSlide = 0;
        } else {
          this.currentSlide++;
        }
      }, this.autoPlayInterval);
    }
  }

  stopAutoPlay(): void {
    if (this.autoPlayTimer && typeof window !== 'undefined') {
      window.clearInterval(this.autoPlayTimer);
    }
  }

  resetAutoPlay(): void {
    if (this.autoPlay) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }
}
