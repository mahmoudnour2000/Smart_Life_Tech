import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  imports: [HeroSectionComponent]
})
export class HomePageComponent implements OnInit {
  heroSubtitle = `Your World, Transformed – Experience the Future of Smart Living

Welcome to Life Tech, where innovation meets intuition to engineer your perfect mood and transform your world. As a leading Saudi company specializing in cutting-edge smart technologies, we're dedicated to crafting intelligent living and working environments that anticipate your every need and exceed your expectations. Forget just smart homes; we create an intelligent life designed to make your daily existence easier, more comfortable, and truly extraordinary.`;

  constructor() { }

  ngOnInit() {
  }

}
