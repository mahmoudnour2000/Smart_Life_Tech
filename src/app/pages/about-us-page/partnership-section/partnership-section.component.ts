import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-partnership-section',
    imports: [CommonModule, TranslateModule],
  templateUrl: './partnership-section.component.html',
  styleUrls: ['./partnership-section.component.css']
})
export class PartnershipSectionComponent implements OnInit {
  @Input() partnerLogo: string = 'assets/images/moorgen.png';
  @Input() partnerName: string = 'Moorgen';
  @Input() imagePosition: 'left' | 'right' = 'right';
  @Input() ariaLabel: string = 'Partnership section';
  constructor() { }

  ngOnInit() {
  }

}
