import { Component, Input, OnInit } from '@angular/core';
import { Partner } from '../../../core/models/partner';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-partners-section',
  imports:[CommonModule, TranslateModule],
  templateUrl: './partners-section.component.html',
  styleUrls: ['./partners-section.component.css']
})
export class PartnersSectionComponent implements OnInit {

   @Input() title: string = 'Our Trusted Partners';
  @Input() description: string = "We're proud to collaborate with leading global and regional brands that share our vision for smarter, more sustainable environments.";
  @Input() ariaLabel: string = 'bePartner.partners.ariaLabel';
  @Input() autoPlaySpeed: number = 30; // pixels per second
  
  @Input() partners: Partner[] = [
    { logo: 'assets/images/partner1.png', name: 'Aljan Group' },
    { logo: 'assets/images/partner2.png', name: 'Aknan' },
    { logo: 'assets/images/partner3.png', name: 'STC' },
    { logo: 'assets/images/partner4.png', name: 'Marco' },
    { logo: 'assets/images/partner5.png', name: 'GIC' },
    { logo: 'assets/images/partner6.png', name: 'Bandar Real Estate' },
    { logo: 'assets/images/partner7.png', name: 'Haron Company' }
  ];

  currentPosition: number = 0;
  private animationFrame?: number;
  private lastTimestamp: number = 0;
  private isPlaying: boolean = true;
  private cardWidth: number = 200;
  private gap: number = 40;
  private maxScroll: number = 0;

  ngOnInit(): void {
    this.calculateMaxScroll();
    // Start animation after a small delay to ensure DOM is ready
    setTimeout(() => {
      this.startAutoPlay();
    }, 100);

    // Recalculate on window resize
    window.addEventListener('resize', () => {
      this.updateDimensions();
      this.calculateMaxScroll();
    });
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
    window.removeEventListener('resize', () => {});
  }

  updateDimensions(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 576) {
      this.cardWidth = 140;
      this.gap = 20;
    } else if (screenWidth <= 767) {
      this.cardWidth = 160;
      this.gap = 24;
    } else if (screenWidth <= 991) {
      this.cardWidth = 180;
      this.gap = 30;
    } else {
      this.cardWidth = 200;
      this.gap = 40;
    }
  }

  calculateMaxScroll(): void {
    this.updateDimensions();
    // Calculate the width of one complete set of partners
    this.maxScroll = this.partners.length * (this.cardWidth + this.gap);
  }

  startAutoPlay(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    this.isPlaying = true;
    this.lastTimestamp = performance.now();
    this.animationFrame = requestAnimationFrame(this.animate);
  }

  stopAutoPlay(): void {
    this.isPlaying = false;
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  pauseAutoPlay(): void {
    this.isPlaying = false;
  }

  resumeAutoPlay(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    this.isPlaying = true;
    this.lastTimestamp = performance.now();
    this.animationFrame = requestAnimationFrame(this.animate);
  }

  animate = (timestamp: number = performance.now()): void => {
    if (!this.isPlaying) {
      return;
    }

    const deltaTime = timestamp - this.lastTimestamp;
    this.lastTimestamp = timestamp;

    // Move based on speed (pixels per second)
    const movement = (this.autoPlaySpeed * deltaTime) / 1000;
    this.currentPosition += movement;

    // Reset position when first set is completely scrolled
    if (this.currentPosition >= this.maxScroll) {
      this.currentPosition = this.currentPosition - this.maxScroll;
    }

    // Continue animation
    this.animationFrame = requestAnimationFrame(this.animate);
  }
}
