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

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [HeroSectionComponent, LifestyleSectionComponent, SolutionsSectionComponent, AboutSectionComponent, SmartSystemsComponent, GridCardsComponent, LifetechFeaturesComponent, ProductsShowcaseComponent, SmartControlComponent, CtaSectionComponent]
})
export class HomePageComponent implements OnInit {
  heroSubtitle = `Your World, Transformed – Experience the Future of Smart Living

Welcome to Life Tech, where innovation meets intuition to engineer your perfect mood and transform your world. As a leading Saudi company specializing in cutting-edge smart technologies, we're dedicated to crafting intelligent living and working environments that anticipate your every need and exceed your expectations. Forget just smart homes; we create an intelligent life designed to make your daily existence easier, more comfortable, and truly extraordinary.`;


smartSolutions: GridCards[] = [
    {
      title: 'Smart Home',
      description: 'Transform Your House Into An Intelligent Living Space With Fully Integrated Control For Lighting, Ac, Curtains, And Entertainment — All At Your Fingertips.',
      image: 'assets/images/smarthome.png'
    },
    {
      title: 'Smart Lighting',
      description: 'Energy Efficient, Dynamic Lighting Systems That Adapt To Your Lifestyle And Mood. Control Brightness, Ambiance, And Scheduling With Ease.',
      image: 'assets/images/smartlight.png'
    },
    {
      title: 'Motorized Curtains',
      description: 'Enjoy Effortless Control Of Curtains, Blinds, Garage Doors, And More. One Touch Is All It Takes For Convenience, Privacy, And Comfort.',
      image: 'assets/images/motorized.png'
    },
    {
      title: 'Smart Accessories',
      description: 'Elegant Switches, Sockets, And Cable Inputs Designed With German Precision. Combining Style And Functionality To Complement Your Smart Environment.',
      image: 'assets/images/smartaccessories.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
