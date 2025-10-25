import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from '../../../core/models/about-us';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials-section',
  imports:[CommonModule, TranslateModule],
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class TestimonialsSectionComponent implements OnInit {

  @Input() ariaLabel: string = 'Client testimonials section';

  currentSlide: number = 0;
  testimonialGroups: string[][] = [];

  ngOnInit(): void {
    this.groupTestimonials();
  }

  groupTestimonials(): void {
    // Group testimonials in pairs (2 per slide)
    this.testimonialGroups = [];
    for (let i = 0; i < 4; i += 2) {
      this.testimonialGroups.push(['aboutUs.testimonials.items.' + i, 'aboutUs.testimonials.items.' + (i + 1)]);
    }
  }

  nextSlide(): void {
    if (this.currentSlide < this.testimonialGroups.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Loop back to start
    }
  }

  previousSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.testimonialGroups.length - 1; // Loop to end
    }
  }

  // RTL-aware navigation methods
  nextSlideRTL(): void {
    // In RTL, "next" should go to previous slide (left to right visually)
    this.previousSlide();
  }

  previousSlideRTL(): void {
    // In RTL, "previous" should go to next slide (right to left visually)
    this.nextSlide();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  getSliderTransform(): string {
    // For RTL, we need to reverse the transform direction
    const isRTL = document.documentElement.dir === 'rtl';
    if (isRTL) {
      return 'translateX(' + (this.currentSlide * 100) + '%)';
    } else {
      return 'translateX(-' + (this.currentSlide * 100) + '%)';
    }
  }

}
