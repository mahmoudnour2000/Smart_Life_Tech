import { Component, Input, OnInit } from '@angular/core';
import { BlogCard } from '../../../core/models/blogs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-cards',
    imports: [CommonModule, RouterModule],
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards.component.css']
})
export class BlogCardsComponent implements OnInit {
 @Input() title?: string;
  @Input() subtitle?: string;
  @Input() cards: BlogCard[] = [];
  @Input() cardsPerPage: number = 9;

  currentPage = 1;
  totalPages = 1;
  totalCards = 0;
  paginatedCards: BlogCard[] = [];
  visiblePages: number[] = [];

  ngOnInit(): void {
    this.totalCards = this.cards.length;
    this.totalPages = Math.ceil(this.totalCards / this.cardsPerPage);
    this.updatePaginatedCards();
    this.updateVisiblePages();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedCards();
      this.updateVisiblePages();
      // Scroll to top of section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  updatePaginatedCards(): void {
    const startIndex = (this.currentPage - 1) * this.cardsPerPage;
    const endIndex = startIndex + this.cardsPerPage;
    this.paginatedCards = this.cards.slice(startIndex, endIndex);
  }

  updateVisiblePages(): void {
    const pages: number[] = [];
    const maxVisible = 5; // Maximum number of page buttons to show

    if (this.totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (this.currentPage > 3) {
        pages.push(-1); // dots
      }

      // Show pages around current page
      const start = Math.max(2, this.currentPage - 1);
      const end = Math.min(this.totalPages - 1, this.currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (this.currentPage < this.totalPages - 2) {
        pages.push(-1); // dots
      }

      // Always show last page
      pages.push(this.totalPages);
    }

    this.visiblePages = pages;
  }
  constructor() { }

  

}
