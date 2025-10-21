import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { GridCardsComponent } from "../../shared/components/grid-cards/grid-cards.component";
import { GridCards } from '../../core/models/home-sections';

@Component({
  selector: 'app-smart-homes-page',
  templateUrl: './smart-homes-page.component.html',
  styleUrls: ['./smart-homes-page.component.css'],
  imports: [HeroSectionComponent, GridCardsComponent]
})
export class SmartHomesPageComponent implements OnInit {
smartSolutions: GridCards[] = [
    {
      title: 'Sound System Solutions',
      description: 'Enjoy high-quality audio with seamless integration across your space. Our smart sound systems let you control music in every room with mobile apps or voice commands.',
      image: 'assets/images/sound.png'
    },
    {
      title: 'Lighting Controls',
      description: 'Transform lighting into a flexible experience. Adjust brightness, scenes, and moods automatically or with a touch—boosting comfort and reducing energy waste.',
      image: 'assets/images/light.jpg'
    },
    {
      title: 'Climate Control',
      description: 'Set the perfect temperature effortlessly. Our intelligent HVAC systems adjust based on occupancy, time of day, and weather conditions for maximum comfort and efficiency.',
      image: 'assets/images/climate.jpg'
    },
    {
      title: 'Motor Control',
      description: 'Automate curtains, blinds, windows, and doors. Schedule them to open or close for convenience, privacy, and security—all controlled by app, panel, or voice.',
      image: 'assets/images/motor.jpg'
    },
    {
      title: 'Security System',
      description: 'Protect your home or business with advanced access control, cameras, and sensors. Receive instant alerts and monitor spaces remotely, anytime and anywhere.',
      image: 'assets/images/security.jpg'
    },
    {
      title: 'Smart Glass',
      description: '“Enjoy total control over privacy and natural light. Instantly switch your glass from clear to frosted to create the perfect atmosphere for work, relaxation, or complete seclusion.”',
      image: 'assets/images/light.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
