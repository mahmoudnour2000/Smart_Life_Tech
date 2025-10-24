import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { ContactFormComponent } from "../../shared/components/contact-form/contact-form.component";
import { PartnersSectionComponent } from "./partners-section/partners-section.component";
import { WhyPartnerComponent } from "./why-partner/why-partner.component";

@Component({
  selector: 'app-be-partner',
  templateUrl: './be-partner.component.html',
  styleUrls: ['./be-partner.component.css'],
  imports: [HeroSectionComponent, ContactFormComponent, PartnersSectionComponent, WhyPartnerComponent]
})
export class BePartnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
