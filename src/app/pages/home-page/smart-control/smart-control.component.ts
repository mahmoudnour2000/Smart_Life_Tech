import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-control',
  imports:[CommonModule],
  templateUrl: './smart-control.component.html',
  styleUrls: ['./smart-control.component.css']
})
export class SmartControlComponent implements OnInit {
@Input() title?: string="Smart control at your fingertips";
  @Input() descriptionParagraphs: string[] = [
    'Enjoy an integrated control experience of every detail of your smart home through a single app. Control your lighting, air conditioning, curtains, garages, audio and security systems with ease – whether by phone or voice commands.',
    'The app features customizable premium interfaces, advanced control panels, smart remotes, and sound that is precisely distributed for each room. Get instant notifications, create scenarios that work for you, and track your home from anywhere in the world.',
    'Everything you need for a smart life... In your hands.'
  ];
  @Input() image: string ='assets/images/app-mockup.png';
  @Input() imagePosition: 'left' | 'right' = 'left';
  @Input() appStoreLink?: string="'https://apps.apple.com/app/your-app'";
  @Input() playStoreLink?: string="'https://play.google.com/store/apps/details?id=your.app'";
  @Input() appStoreImage?: string='assets/images/app-store-badge.png';
  @Input() playStoreImage?: string='assets/images/google-play-badge.png';
  constructor() { }

  ngOnInit() {
  }

}
