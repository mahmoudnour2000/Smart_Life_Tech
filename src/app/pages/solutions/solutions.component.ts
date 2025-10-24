import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { GridCardsComponent } from "../../shared/components/grid-cards/grid-cards.component";
import { GridCards } from '../../core/models/home-sections';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
  imports: [HeroSectionComponent, GridCardsComponent, TranslateModule]
})
export class SolutionsComponent implements OnInit {
smartSolutions: GridCards[] = [
    {
      title: 'solutions.cards.building.title',
      description: 'solutions.cards.building.description',
      image: 'assets/images/sol1.png'
    },
    {
      title: 'solutions.cards.home.title',
      description: 'solutions.cards.home.description',
      image: 'assets/images/sol2.png'
    },
    {
      title: 'solutions.cards.hotel.title',
      description: 'solutions.cards.hotel.description',
      image: 'assets/images/sol3.png'
    },
    {
      title: 'solutions.cards.hospital.title',
      description: 'solutions.cards.hospital.description',
      image: 'assets/images/sol4.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
