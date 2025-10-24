import { Component, Input, OnInit } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { Product } from '../../../core/models/home-sections';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-products-showcase',
  templateUrl: './products-showcase.component.html',
  styleUrls: ['./products-showcase.component.css'],
  imports: [ButtonComponent,CommonModule, TranslateModule]
})
export class ProductsShowcaseComponent implements OnInit {
@Input() title?: string="Moorgen's Exclusive Products";
  @Input() subtitle?: string="A German innovation, with a luxurious Saudi touch.";
  @Input() products: Product[] = [
    {
      image: 'assets/images/p1.png',
      alt: 'Smart Switch'
    },
    {
      image: 'assets/images/p2.png',
      alt: 'Central Control Unit'
    },
    {
      image: 'assets/images/p3.png',
      alt: 'Remote Controls'
    },
    {
      image: 'assets/images/p4.png',
      alt: 'Smart Device'
    },
    {
      image: 'assets/images/p5.png',
      alt: 'Touch Panel'
    },
    {
      image: 'assets/images/p6.png',
      alt: 'Luxury Switch'
    }
  ];

  @Input() largeItemsIndices: number[] = [1, 5]; // الـ items اللي هتكون كبيرة
  @Input() showButton: boolean = true;
  @Input() buttonText: string = 'More';
  @Input() buttonRoute: string = '/products';
  @Input() buttonVariant: 'primary' | 'secondary' = 'primary';
  @Input() buttonTitle: string = 'View more products';

  isLargeItem(index: number): boolean {
    return this.largeItemsIndices.includes(index);
  }
  constructor() { }

  ngOnInit() {
  }

}
