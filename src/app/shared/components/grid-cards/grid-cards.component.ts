import { Component, Input, OnInit } from '@angular/core';
import { GridCards } from '../../../core/models/home-sections';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-grid-cards',
    imports: [CommonModule, TranslateModule],
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css']
})
export class GridCardsComponent implements OnInit {
 @Input() cards: GridCards[] = [];
  @Input() sectionTitle?: string;
  @Input() sectionSubtitle?: string;
  constructor() { }

  ngOnInit() {
  }
getCardClasses(index: number): string {
  const patterns = [
    'col-12 col-md-7 col-lg-7', // الكارت الأول أكبر شوية
    'col-12 col-md-5 col-lg-5', // الكارت الثاني أصغر شوية
    'col-12 col-md-5 col-lg-5', // الثالث أصغر
    'col-12 col-md-7 col-lg-7', // الرابع أكبر
  ];

  return patterns[index % patterns.length];
}

}
