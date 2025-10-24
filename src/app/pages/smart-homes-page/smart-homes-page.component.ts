import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { GridCardsComponent } from "../../shared/components/grid-cards/grid-cards.component";
import { GridCards } from '../../core/models/home-sections';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-smart-homes-page',
  templateUrl: './smart-homes-page.component.html',
  styleUrls: ['./smart-homes-page.component.css'],
  imports: [HeroSectionComponent, GridCardsComponent, TranslateModule]
})
export class SmartHomesPageComponent implements OnInit {
smartSolutions: GridCards[] = [
    {
      title: 'smartHomes.cards.soundSystem.title',
      description: 'smartHomes.cards.soundSystem.description',
      image: 'assets/images/sound.png'
    },
    {
      title: 'smartHomes.cards.lighting.title',
      description: 'smartHomes.cards.lighting.description',
      image: 'assets/images/light.jpg'
    },
    {
      title: 'smartHomes.cards.climate.title',
      description: 'smartHomes.cards.climate.description',
      image: 'assets/images/climate.jpg'
    },
    {
      title: 'smartHomes.cards.motor.title',
      description: 'smartHomes.cards.motor.description',
      image: 'assets/images/motor.jpg'
    },
    {
      title: 'smartHomes.cards.security.title',
      description: 'smartHomes.cards.security.description',
      image: 'assets/images/security.jpg'
    },
    {
      title: 'smartHomes.cards.glass.title',
      description: 'smartHomes.cards.glass.description',
      image: 'assets/images/light.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
