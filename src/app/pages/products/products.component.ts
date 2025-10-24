import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { ProductSliderComponent } from "../../shared/components/product-slider/product-slider.component";
import { FilterTab, ProductCard } from '../../core/models/products-page';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [HeroSectionComponent, ProductSliderComponent, TranslateModule]
})
export class ProductsComponent  {
smartHomeProducts: ProductCard[] = [
    {
      id: '1',
      image: 'assets/images/remote.png',
      title: 'products.products.remoteControl.title',
      description: 'products.products.remoteControl.description'
    },
    {
      id: '2',
      image: 'assets/images/dimming.png',
      title: 'products.products.dimmingKnob.title',
      description: 'products.products.dimmingKnob.description'
    },
    {
      id: '3',
      image: 'assets/images/dimming-remote.png',
      title: 'products.products.dimmingRemote.title',
      description: 'products.products.dimmingRemote.description'
    },
    {
      id: '4',
      image: 'assets/images/lcd.png',
      title: 'products.products.lcdPanel.title',
      description: 'products.products.lcdPanel.description'
    },
    {
      id: '5',
      image: 'assets/images/cpanel.png',
      title: 'products.products.smartSwitch.title',
      description: 'products.products.smartSwitch.description'
    }
  ];

  // ===== Lighting Products (مع فلترة) =====
  lightingFilters: FilterTab[] = [
    { label: 'products.sections.lighting.filters.all', value: 'all' },
    { label: 'products.sections.lighting.filters.outdoor', value: 'outdoor' },
    { label: 'products.sections.lighting.filters.indoor', value: 'indoor' },
    { label: 'products.sections.lighting.filters.decorative', value: 'decorative' }
  ];

  lightingProducts: ProductCard[] = [
    {
      id: 'l1',
      image: 'assets/images/remote.png',
      title: 'products.products.remoteControl.title',
      description: 'products.products.remoteControl.description',
      category: 'indoor'
    },
    {
      id: 'l2',
      image: 'assets/images/dimming.png',
      title: 'products.products.dimmingKnob.title',
      description: 'products.products.dimmingKnob.description',
      category: 'indoor'
    },
    {
      id: 'l3',
      image: 'assets/images/dimming-remote.png',
      title: 'products.products.dimmingRemote.title',
      description: 'products.products.dimmingRemote.description',
      category: 'indoor'
    },
    {
      id: 'l4',
      image: 'assets/images/lcd.png',
      title: 'products.products.outdoorLight.title',
      description: 'products.products.outdoorLight.description',
      category: 'outdoor'
    },
    {
      id: 'l5',
      image: 'assets/images/dimming-remote.png',
      title: 'products.products.decorativeLamp.title',
      description: 'products.products.decorativeLamp.description',
      category: 'decorative'
    },
    {
      id: 'l6',
      image: 'assets/images/cpanel.png',
      title: 'products.products.ceilingLight.title',
      description: 'products.products.ceilingLight.description',
      category: 'indoor'
    }
  ];

  // ===== Cables & Accessories (مع فلترة) =====
  cablesFilters: FilterTab[] = [
    { label: 'products.sections.cables.filters.all', value: 'all' },
    { label: 'products.sections.cables.filters.socket', value: 'socket' },
    { label: 'products.sections.cables.filters.switch', value: 'switch' }
  ];

  cablesProducts: ProductCard[] = [
    {
      id: 'c1',
      image: 'assets/images/remote.png',
      title: 'products.products.remoteControl.title',
      description: 'products.products.remoteControl.description',
      category: 'socket'
    },
    {
      id: 'c2',
      image: 'assets/images/dimming.png',
      title: 'products.products.dimmingKnob.title',
      description: 'products.products.dimmingKnob.description',
      category: 'switch'
    },
    {
      id: 'c3',
      image: 'assets/images/dimming-remote.png',
      title: 'products.products.dimmingRemote.title',
      description: 'products.products.dimmingRemote.description',
      category: 'socket'
    },
    {
      id: 'c4',
      image: 'assets/images/lcd.png',
      title: 'products.products.smartSwitch.title',
      description: 'products.products.smartSwitch.description',
      category: 'switch'
    },
    {
      id: 'c5',
      image: 'assets/images/cpanel.png',
      title: 'products.products.usbSocket.title',
      description: 'products.products.usbSocket.description',
      category: 'socket'
    }
  ];

}
