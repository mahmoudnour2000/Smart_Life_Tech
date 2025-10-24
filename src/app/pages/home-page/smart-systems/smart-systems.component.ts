import { Component, OnInit } from '@angular/core';
import { SystemSlide } from '../../../core/models/home-sections';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-smart-systems',
  templateUrl: './smart-systems.component.html',
  styleUrls: ['./smart-systems.component.css'],
  imports: [ButtonComponent,CommonModule, TranslateModule]
})
export class SmartSystemsComponent {
currentIndex: number = 0;

  slides: SystemSlide[] = [
    {
      image: 'assets/images/smart1.jpg',
      title: 'smartSystems.slides.lighting.title',
      description: 'smartSystems.slides.lighting.description',
      buttonText: 'smartSystems.slides.lighting.buttonText',
      buttonRoute: '/lighting'
    },
    {
      image: 'assets/images/sliderHome2.png',
      title: 'smartSystems.slides.security.title',
      description: 'smartSystems.slides.security.description',
      buttonText: 'smartSystems.slides.security.buttonText',
      buttonRoute: '/security'
    },
    {
      image: 'assets/images/sliderHome1.png',
      title: 'smartSystems.slides.climate.title',
      description: 'smartSystems.slides.climate.description',
      buttonText: 'smartSystems.slides.climate.buttonText',
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
