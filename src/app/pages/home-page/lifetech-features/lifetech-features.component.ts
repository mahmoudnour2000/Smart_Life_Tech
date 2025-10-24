import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../../core/models/home-sections';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-lifetech-features',
  imports:[CommonModule, TranslateModule],
  templateUrl: './lifetech-features.component.html',
  styleUrls: ['./lifetech-features.component.css']
})
export class LifetechFeaturesComponent implements OnInit {
    @Input() title?: string="Smart Solutions"   ;
  @Input() subtitle?: string="Advanced technology for modern living";
  @Input() image: string = 'assets/images/ProductImage.png';
  @Input() imagePosition: 'left' | 'right' = 'left';
 @Input() features: Feature[] = [
    {
      text: 'lifetechFeatures.features.patents'
    },
    {
      text: 'lifetechFeatures.features.awards'
    },
    {
      text: 'lifetechFeatures.features.manufacturer'
    },
    {
      text: 'lifetechFeatures.features.products'
    },
    {
      text: 'lifetechFeatures.features.connectivity'
    }
  ];

  smartFeatures: Feature[] = [
    {
      text: 'Complete home automation with one touch control'
    },
    {
      text: 'Energy saving up to 40% with smart scheduling'
    },
    {
      text: 'Voice control integration with Alexa and Google Home'
    }
  ];

  productFeatures: Feature[] = [
    {
      text: 'Premium quality materials'
    },
    {
      text: 'Easy installation and setup'
    },
    {
      text: 'Lifetime warranty and support'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
