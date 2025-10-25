import { Component, OnInit } from '@angular/core';
import { Goal } from '../../../core/models/about-us';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-goals',
  imports:[CommonModule, TranslateModule],
  templateUrl: './our-goals.component.html',
  styleUrls: ['./our-goals.component.css']
})
export class OurGoalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mainImage: string = 'assets/images/goals-main-image.png';
  mainImageAlt: string = 'Our Goals';

}
