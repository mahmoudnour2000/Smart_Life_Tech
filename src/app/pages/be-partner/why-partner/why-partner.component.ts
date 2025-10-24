import { Component, OnInit } from '@angular/core';
import { PartnerFeature } from '../../../core/models/partner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-partner',
  imports:[CommonModule],
  templateUrl: './why-partner.component.html',
  styleUrls: ['./why-partner.component.css']
})
export class WhyPartnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 features: PartnerFeature[] = [
    {
      title: '12+ Years of Experience',
      description: 'Proven track record in smart building solutions'
    },
    {
      title: 'Trusted Brand',
      description: 'Strong reputation in Saudi Arabia\'s market'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Partnerships with global leaders like Moorgen'
    },
    {
      title: 'Growing Market',
      description: 'Smart homes, hotels, hospitals, and commercial buildings are on the rise'
    },
    {
      title: 'Shared Success',
      description: 'We grow together by delivering value to clients'
    }
  ];
}
