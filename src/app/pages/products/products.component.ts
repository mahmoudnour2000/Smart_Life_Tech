import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [HeroSectionComponent]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
