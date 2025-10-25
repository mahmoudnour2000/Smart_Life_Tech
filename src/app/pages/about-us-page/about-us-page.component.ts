import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { TranslateModule } from '@ngx-translate/core';
import { AboutUsParagraphComponent } from "./about-us-paragraph/about-us-paragraph.component";
import { OurVisionComponent } from "./our-vision/our-vision.component";
import { OurGoalsComponent } from "./our-goals/our-goals.component";
import { SimpleCardsComponent } from "../../shared/components/simple-cards/simple-cards.component";
import { PartnershipSectionComponent } from "./partnership-section/partnership-section.component";
import { ProjectsSectionComponent } from "./projects-section/projects-section.component";
import { TestimonialsSectionComponent } from "./testimonials-section/testimonials-section.component";
import { MediaSliderComponent } from "./media-slider/media-slider.component";

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  imports: [HeroSectionComponent, TranslateModule, AboutUsParagraphComponent, OurVisionComponent, OurGoalsComponent, SimpleCardsComponent, PartnershipSectionComponent, ProjectsSectionComponent, TestimonialsSectionComponent, MediaSliderComponent]
})
export class AboutUsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
