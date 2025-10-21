import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { GridCardsComponent } from "../../shared/components/grid-cards/grid-cards.component";
import { GridCards } from '../../core/models/home-sections';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
  imports: [HeroSectionComponent, GridCardsComponent]
})
export class SolutionsComponent implements OnInit {
smartSolutions: GridCards[] = [
    {
      title: 'Building Solutions',
      description: 'Transform commercial spaces with intelligent systems that enhance security, energy efficiency, and comfort.',
      image: 'assets/images/sol1.png'
    },
    {
      title: 'Home Solutions',
      description: 'Bring comfort and luxury to your everyday life with automation, IoT, and AI-powered smart living.',
      image: 'assets/images/sol2.png'
    },
    {
      title: 'Hotel Solutions',
      description: 'Redefine hospitality with technology that delivers unmatched guest comfort, security, and service efficiency.',
      image: 'assets/images/sol3.png'
    },
    {
      title: 'Hospital Systems',
      description: 'Revolutionize healthcare with intelligent solutions that improve patient care, safety, and operational performance.',
      image: 'assets/images/sol4.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
