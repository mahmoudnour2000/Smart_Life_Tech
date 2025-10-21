import { Component, OnInit } from '@angular/core';
import { SystemSlide } from '../../../core/models/home-sections';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smart-systems',
  templateUrl: './smart-systems.component.html',
  styleUrls: ['./smart-systems.component.css'],
  imports: [ButtonComponent,CommonModule]
})
export class SmartSystemsComponent {
currentIndex: number = 0;

  slides: SystemSlide[] = [
    {
      image: 'assets/images/smart1.jpg',
      title: 'Smart Lighting Control Systems',
      description: 'Our smart lighting systems let you control all illumination from one point. They save energy by turning lights on when motion is detected and off when rooms are empty. They also boost security by simulating occupancy when you\'re away.',
      buttonText: 'Find out more',
      buttonRoute: '/lighting'
    },
    {
      image: 'assets/images/sliderHome2.png',
      title: 'Smart Security Systems',
      description: 'Advanced security solutions with real-time monitoring and alerts. Protect your home with intelligent cameras, sensors, and automated responses.',
      buttonText: 'Learn more',
      buttonRoute: '/security'
    },
    {
      image: 'assets/images/sliderHome1.png',
      title: 'Climate Control Systems',
      description: 'Maintain perfect temperature and air quality automatically. Save energy while ensuring maximum comfort throughout your space.',
      buttonText: 'Explore',
      buttonRoute: '/climate'
    }
  ];

  get currentSlide(): SystemSlide {
    return this.slides[this.currentIndex];
  }

  previousSlide(): void {
    this.currentIndex = this.currentIndex === 0 
      ? this.slides.length - 1 
      : this.currentIndex - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }

}
