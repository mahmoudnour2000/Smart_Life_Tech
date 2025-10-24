import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { LifestyleSectionComponent } from "./lifestyle-section/lifestyle-section.component";
import { SolutionsSectionComponent } from "./solutions-section/solutions-section.component";
import { AboutSectionComponent } from "./about-section/about-section.component";
import { SmartSystemsComponent } from "./smart-systems/smart-systems.component";
import { GridCardsComponent } from "../../shared/components/grid-cards/grid-cards.component";
import { GridCards } from '../../core/models/home-sections';
import { LifetechFeaturesComponent } from "./lifetech-features/lifetech-features.component";
import { ProductsShowcaseComponent } from "./products-showcase/products-showcase.component";
import { SmartControlComponent } from "./smart-control/smart-control.component";
import { CtaSectionComponent } from "./cta-section/cta-section.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [HeroSectionComponent, LifestyleSectionComponent, SolutionsSectionComponent, AboutSectionComponent, SmartSystemsComponent, GridCardsComponent, LifetechFeaturesComponent, ProductsShowcaseComponent, SmartControlComponent, CtaSectionComponent, TranslateModule]
})
export class HomePageComponent implements OnInit {
  smartSolutions: GridCards[] = [
    {
      title: 'smartSolutions.cards.smartHome.title',
      description: 'smartSolutions.cards.smartHome.description',
      image: 'assets/images/smarthome.png'
    },
    {
      title: 'smartSolutions.cards.smartLighting.title',
      description: 'smartSolutions.cards.smartLighting.description',
      image: 'assets/images/smartlight.png'
    },
    {
      title: 'smartSolutions.cards.motorizedCurtains.title',
      description: 'smartSolutions.cards.motorizedCurtains.description',
      image: 'assets/images/motorized.png'
    },
    {
      title: 'smartSolutions.cards.smartAccessories.title',
      description: 'smartSolutions.cards.smartAccessories.description',
      image: 'assets/images/smartaccessories.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
