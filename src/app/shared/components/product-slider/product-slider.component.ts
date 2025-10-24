import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FilterTab, ProductCard } from '../../../core/models/products-page';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-product-slider',
  imports:[CommonModule, TranslateModule],
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit {

   @Input() title?: string;
  @Input() products: ProductCard[] = [];
  @Input() filterTabs: FilterTab[] = [];
  @Input() showFilters: boolean = false;
  @Input() showDots: boolean = true;
  @Input() visibleCardsDesktop: number = 3;
  @Input() visibleCardsTablet: number = 2;
  @Input() visibleCardsMobile: number = 1;

  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  currentIndex = 0;
  activeFilter = 'all';
  filteredProducts: ProductCard[] = [];
  visibleCards = 3;
  slideWidth = 33.333;
  dots: number[] = [];
  maxIndex = 0;

  ngOnInit(): void {
    this.updateVisibleCards();
    this.filterProducts();
    this.updateDots();
  }

  ngAfterViewInit(): void {
    this.updateVisibleCards();
    window.addEventListener('resize', () => this.updateVisibleCards());
  }

  updateVisibleCards(): void {
    const width = window.innerWidth;
    if (width < 768) {
      this.visibleCards = this.visibleCardsMobile;
    } else if (width < 992) {
      this.visibleCards = this.visibleCardsTablet;
    } else {
      this.visibleCards = this.visibleCardsDesktop;
    }
    this.slideWidth = 100 / this.visibleCards;
    this.updateDots();
  }

  setActiveFilter(value: string): void {
    this.activeFilter = value;
    this.currentIndex = 0;
    this.filterProducts();
    this.updateDots();
  }

  filterProducts(): void {
    if (this.activeFilter === 'all' || !this.showFilters) {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(
        p => p.category === this.activeFilter
      );
    }
    this.maxIndex = Math.max(0, this.filteredProducts.length - this.visibleCards);
  }

  updateDots(): void {
    const totalSlides = Math.ceil(this.filteredProducts.length / this.visibleCards);
    this.dots = Array(totalSlides).fill(0).map((_, i) => i);
  }

  nextSlide(): void {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++;
    }
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = Math.min(index, this.maxIndex);
  }
}
