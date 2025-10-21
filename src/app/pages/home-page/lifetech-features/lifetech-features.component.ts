import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../../core/models/home-sections';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifetech-features',
  imports:[CommonModule],
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
      text: 'It owns more than 160 patents for all products and smart product devices.'
    },
    {
      text: 'Winner of international awards and certifications in Smart Home System and Smart Solutions.'
    },
    {
      text: 'Morgen is a leading German manufacturer of smart home products and systems, with all its products 100% quality tested.'
    },
    {
      text: 'Producing and manufacturing more than 1000 products to meet all cutting-edge smart building and home solutions.'
    },
    {
      text: 'The ability to connect wired and wireless solutions on the system and with the same user interface, as they are fully controlled from a single interface.'
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
