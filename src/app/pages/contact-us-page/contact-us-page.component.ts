import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { BranchLocationComponent } from "../../shared/components/branch-location/branch-location.component";

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css'],
  imports: [HeroSectionComponent, ContactFormComponent, BranchLocationComponent]
})
export class ContactUsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    riyadhContacts = [
    {
      iconImage: 'assets/images/Location_IconL.png',
      iconAlt: 'Location icon',
      text: 'Riyadh, Al Rabwa District, Al Moarikh Bin Bishr Street',
      type: 'address' as const
    },
    {
      iconImage: 'assets/images/Phone_IconL.png',
      iconAlt: 'Phone icon',
      text: '+966 537733222',
      type: 'phone' as const,
      link: 'tel:+966537733222'
    },
    {
      iconImage: 'assets/images/Phone_IconL.png',
      iconAlt: 'Phone icon',
      text: '+966 503451500',
      type: 'phone' as const,
      link: 'tel:+966503451500'
    },
    {
      iconImage: 'assets/images/Phone_IconL.png',
      iconAlt: 'Phone icon',
      text: '+966 920010170',
      type: 'phone' as const,
      link: 'tel:+966920010170'
    }
  ];

  jeddahContacts = [
    {
      iconImage: 'assets/images/Location_IconL.png',
      iconAlt: 'Location icon',
      text: 'Jeddah, Al Hamra District, Palestine Street',
      type: 'address' as const
    },
    {
      iconImage: 'assets/images/Phone_IconL.png',
      iconAlt: 'Phone icon',
      text: '+966 503451500',
      type: 'phone' as const,
      link: 'tel:+966503451500'
    },
    {
      iconImage: 'assets/images/Phone_IconL.png',
      iconAlt: 'Phone icon',
      text: '+966 537733222',
      type: 'phone' as const,
      link: 'tel:+966537733222'
    },
    {
      iconImage: 'assets/images/Phone_IconL.png',
      iconAlt: 'Phone icon',
      text: '+966 920010170',
      type: 'phone' as const,
      link: 'tel:+966920010170'
    }
  ];

}
