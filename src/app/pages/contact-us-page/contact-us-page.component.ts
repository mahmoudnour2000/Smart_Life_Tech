import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { ContactFormComponent } from '../../shared/components/contact-form/contact-form.component';
import { BranchLocationComponent } from "../../shared/components/branch-location/branch-location.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.css'],
  imports: [HeroSectionComponent, ContactFormComponent, BranchLocationComponent, TranslateModule]
})
export class ContactUsPageComponent implements OnInit {

  riyadhContacts: any[] = [];
  jeddahContacts: any[] = [];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.initializeContacts();
  }

  initializeContacts() {
    this.translate.get('contactUs.branches.riyadh.phones').subscribe(phones => {
      this.riyadhContacts = [
        {
          iconImage: 'assets/images/Location_IconL.png',
          iconAlt: 'Location icon',
          text: 'contactUs.branches.riyadh.address',
          type: 'address' as const
        },
        {
          iconImage: 'assets/images/Phone_IconL.png',
          iconAlt: 'Phone icon',
          text: phones[0],
          type: 'phone' as const,
          link: 'tel:+966537733222'
        },
        {
          iconImage: 'assets/images/Phone_IconL.png',
          iconAlt: 'Phone icon',
          text: phones[1],
          type: 'phone' as const,
          link: 'tel:+966503451500'
        },
        {
          iconImage: 'assets/images/Phone_IconL.png',
          iconAlt: 'Phone icon',
          text: phones[2],
          type: 'phone' as const,
          link: 'tel:+966920010170'
        }
      ];
    });

    this.translate.get('contactUs.branches.jeddah.phones').subscribe(phones => {
      this.jeddahContacts = [
        {
          iconImage: 'assets/images/Location_IconL.png',
          iconAlt: 'Location icon',
          text: 'contactUs.branches.jeddah.address',
          type: 'address' as const
        },
        {
          iconImage: 'assets/images/Phone_IconL.png',
          iconAlt: 'Phone icon',
          text: phones[0],
          type: 'phone' as const,
          link: 'tel:+966503451500'
        },
        {
          iconImage: 'assets/images/Phone_IconL.png',
          iconAlt: 'Phone icon',
          text: phones[1],
          type: 'phone' as const,
          link: 'tel:+966537733222'
        },
        {
          iconImage: 'assets/images/Phone_IconL.png',
          iconAlt: 'Phone icon',
          text: phones[2],
          type: 'phone' as const,
          link: 'tel:+966920010170'
        }
      ];
    });
  }



}
