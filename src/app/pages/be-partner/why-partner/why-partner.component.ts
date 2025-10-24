import { Component, OnInit } from '@angular/core';
import { PartnerFeature } from '../../../core/models/partner';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-partner',
  imports:[CommonModule, TranslateModule],
  templateUrl: './why-partner.component.html',
  styleUrls: ['./why-partner.component.css']
})
export class WhyPartnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 features: PartnerFeature[] = [
    {
      title: 'bePartner.whyPartner.features.0.title',
      description: 'bePartner.whyPartner.features.0.description'
    },
    {
      title: 'bePartner.whyPartner.features.1.title',
      description: 'bePartner.whyPartner.features.1.description'
    },
    {
      title: 'bePartner.whyPartner.features.2.title',
      description: 'bePartner.whyPartner.features.2.description'
    },
    {
      title: 'bePartner.whyPartner.features.3.title',
      description: 'bePartner.whyPartner.features.3.description'
    },
    {
      title: 'bePartner.whyPartner.features.4.title',
      description: 'bePartner.whyPartner.features.4.description'
    }
  ];
}
