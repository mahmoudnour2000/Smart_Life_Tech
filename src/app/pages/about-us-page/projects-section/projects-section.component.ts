import { Component, Input, OnInit } from '@angular/core';
import { ProjectCard } from '../../../core/models/about-us';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-section',
    imports: [CommonModule, TranslateModule],

  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements OnInit {
  @Input() ariaLabel: string = 'Our projects section';

  constructor() { }

  ngOnInit() {
  }

}
