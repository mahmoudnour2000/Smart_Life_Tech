import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css'],
  imports: [HeroSectionComponent, TranslateModule]
})
export class AboutUsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
