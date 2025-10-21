import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent  {

@Input() title: string = 'About Us';
  @Input() subtitle: string = 'Engineering Your Ideal Atmosphere';
  @Input() videoUrl: string = 'https://www.youtube.com/embed/2zYVv3AiNq4?si=wG3gWKCMfetIuH9E';
  @Input() videoTitle: string = 'About LifeTech - Company Introduction';
  @Input() ariaLabel: string = 'About us section with video';

  safeVideoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  ngOnChanges(): void {
    // Update safe URL when videoUrl input changes
    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}
