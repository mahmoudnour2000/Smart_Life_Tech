import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { ProductSliderComponent } from "../../shared/components/product-slider/product-slider.component";
import { FilterTab, ProductCard } from '../../core/models/products-page';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [HeroSectionComponent, ProductSliderComponent]
})
export class ProductsComponent  {
smartHomeProducts: ProductCard[] = [
    {
      id: '1',
      image: 'assets/images/remote.png',
      title: 'Remote Control',
      description: 'Compact, User-Friendly Device For Managing Lighting, Climate, And Other Smart Functions Effortlessly.'
    },
    {
      id: '2',
      image: 'assets/images/dimming.png',
      title: 'Dimming Knob',
      description: 'Smooth, Precise Control For Light Brightness, Adding Comfort And Flexibility To Any Space.'
    },
    {
      id: '3',
      image: 'assets/images/dimming-remote.png',
      title: 'Dimming Remote Control',
      description: 'Wireless Control To Adjust Lighting Levels Instantly, Offering Convenience From Anywhere In The Room.'
    },
    {
      id: '4',
      image: 'assets/images/lcd.png',
      title: 'LCD Panel',
      description: 'Elegant Touch Display For Easy Control Of Lighting And Climate Systems.'
    },
    {
      id: '5',
      image: 'assets/images/cpanel.png',
      title: 'Smart Switch',
      description: 'Modern switch with advanced control features.'
    }
  ];

  // ===== Lighting Products (مع فلترة) =====
  lightingFilters: FilterTab[] = [
    { label: 'All', value: 'all' },
    { label: 'Outdoor', value: 'outdoor' },
    { label: 'Indoor', value: 'indoor' },
    { label: 'Decorative', value: 'decorative' }
  ];

  lightingProducts: ProductCard[] = [
    {
      id: 'l1',
      image: 'assets/images/remote.png',
      title: 'Remote Control',
      description: 'Compact, User-Friendly Device For Managing Lighting.',
      category: 'indoor'
    },
    {
      id: 'l2',
      image: 'assets/images/dimming.png',
      title: 'Dimming Knob',
      description: 'Smooth, Precise Control For Light Brightness.',
      category: 'indoor'
    },
    {
      id: 'l3',
      image: 'assets/images/dimming-remote.png',
      title: 'Dimming Remote Control',
      description: 'Wireless Control To Adjust Lighting Levels Instantly.',
      category: 'indoor'
    },
    {
      id: 'l4',
      image: 'assets/images/lcd.png',
      title: 'Outdoor Light',
      description: 'Weather-resistant lighting for gardens and patios.',
      category: 'outdoor'
    },
    {
      id: 'l5',
      image: 'assets/images/dimming-remote.png',
      title: 'Decorative Lamp',
      description: 'Stylish lighting to enhance your interior design.',
      category: 'decorative'
    },
    {
      id: 'l6',
      image: 'assets/images/cpanel.png',
      title: 'Ceiling Light',
      description: 'Modern ceiling light with smart control.',
      category: 'indoor'
    }
  ];

  // ===== Cables & Accessories (مع فلترة) =====
  cablesFilters: FilterTab[] = [
    { label: 'All', value: 'all' },
    { label: 'Socket', value: 'socket' },
    { label: 'Switch', value: 'switch' }
  ];

  cablesProducts: ProductCard[] = [
    {
      id: 'c1',
      image: 'assets/images/remote.png',
      title: 'Remote Control',
      description: 'Compact, User-Friendly Device For Managing Lighting.',
      category: 'socket'
    },
    {
      id: 'c2',
      image: 'assets/images/dimming.png',
      title: 'Dimming Knob',
      description: 'Smooth, Precise Control For Light Brightness.',
      category: 'switch'
    },
    {
      id: 'c3',
      image: 'assets/images/dimming-remote.png',
      title: 'Dimming Remote Control',
      description: 'Wireless Control To Adjust Lighting Levels Instantly.',
      category: 'socket'
    },
    {
      id: 'c4',
      image: 'assets/images/lcd.png',
      title: 'Smart Switch',
      description: 'Advanced switch with touch control.',
      category: 'switch'
    },
    {
      id: 'c5',
      image: 'assets/images/cpanel.png',
      title: 'USB Socket',
      description: 'Modern socket with USB charging ports.',
      category: 'socket'
    }
  ];

}
