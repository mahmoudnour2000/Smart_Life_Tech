import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { BlogCardsComponent } from "../../shared/components/blog-cards/blog-cards.component";
import { BlogCard } from '../../core/models/blogs';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
  imports: [HeroSectionComponent, BlogCardsComponent, TranslateModule]
})
export class BlogPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blogArticles: BlogCard[] = [
    {
      id: '1',
      image: 'assets/images/B1.png',
      readTime: 'blog.articles.0.readTime',
      date: 'blog.articles.0.date',
      title: 'blog.articles.0.title',
      link: '/blog/12-years-innovation'
    },
    {
      id: '2',
      image: 'assets/images/B2.png',
      readTime: 'blog.articles.1.readTime',
      date: 'blog.articles.1.date',
      title: 'blog.articles.1.title',
      link: '/blog/revolutionizing-comfort'
    },
    {
      id: '3',
      image: 'assets/images/B3.png',
      readTime: 'blog.articles.2.readTime',
      date: 'blog.articles.2.date',
      title: 'blog.articles.2.title',
      link: '/blog/ai-home-security'
    },
    {
      id: '4',
      image: 'assets/images/B4.png',
      readTime: 'blog.articles.3.readTime',
      date: 'blog.articles.3.date',
      title: 'blog.articles.3.title',
      link: '/blog/green-living'
    },
    {
      id: '5',
      image: 'assets/images/B5.png',
      readTime: 'blog.articles.4.readTime',
      date: 'blog.articles.4.date',
      title: 'blog.articles.4.title',
      link: '/blog/top-5-smart-devices'
    },
    {
      id: '6',
      image: 'assets/images/B6.png',
      readTime: 'blog.articles.5.readTime',
      date: 'blog.articles.5.date',
      title: 'blog.articles.5.title',
      link: '/blog/health-benefits'
    },
    {
      id: '7',
      image: 'assets/images/B7.png',
      readTime: 'blog.articles.6.readTime',
      date: 'blog.articles.6.date',
      title: 'blog.articles.6.title',
      link: '/blog/iot-game-changer'
    },
    {
      id: '8',
      image: 'assets/images/B8.png',
      readTime: 'blog.articles.7.readTime',
      date: 'blog.articles.7.date',
      title: 'blog.articles.7.title',
      link: '/blog/future-proofing'
    },
    {
      id: '9',
      image: 'assets/images/B9.png',
      readTime: 'blog.articles.8.readTime',
      date: 'blog.articles.8.date',
      title: 'blog.articles.8.title',
      link: '/blog/smart-home-security'
    },
    {
      id: '10',
      image: 'assets/images/B1.png',
      readTime: 'blog.articles.9.readTime',
      date: 'blog.articles.9.date',
      title: 'blog.articles.9.title',
      link: '/blog/voice-control'
    },
    {
      id: '11',
      image: 'assets/images/B3.png',
      readTime: 'blog.articles.10.readTime',
      date: 'blog.articles.10.date',
      title: 'blog.articles.10.title',
      link: '/blog/energy-efficiency'
    },
    {
      id: '12',
      image: 'assets/images/B5.png',
      readTime: 'blog.articles.11.readTime',
      date: 'blog.articles.11.date',
      title: 'blog.articles.11.title',
      link: '/blog/smart-kitchens'
    }
  ];

}
