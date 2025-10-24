import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from "../../shared/components/hero-section/hero-section.component";
import { BlogCardsComponent } from "../../shared/components/blog-cards/blog-cards.component";
import { BlogCard } from '../../core/models/blogs';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
  imports: [HeroSectionComponent, BlogCardsComponent]
})
export class BlogPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
blogArticles: BlogCard[] = [
    {
      id: '1',
      image: 'assets/images/B1.png',
      readTime: '5 min read',
      date: '15 March 2025',
      title: '12 Years of Innovation: How Life Tech Contributed to Shaping the Future of Smart Buildings in Saudi Arabia',
      link: '/blog/12-years-innovation'
    },
    {
      id: '2',
      image: 'assets/images/B2.png',
      readTime: '5 min read',
      date: '15 April 2025',
      title: 'Revolutionizing Comfort: The Latest Trends in Smart Home Automation',
      link: '/blog/revolutionizing-comfort'
    },
    {
      id: '3',
      image: 'assets/images/B3.png',
      readTime: '4 min read',
      date: '01 May 2025',
      title: 'The Rise of AI in Home Security: What You Need to Know',
      link: '/blog/ai-home-security'
    },
    {
      id: '4',
      image: 'assets/images/B4.png',
      readTime: '6 min read',
      date: '20 May 2025',
      title: 'Green Living: How Smart Homes are Paving the Way for Sustainability',
      link: '/blog/green-living'
    },
    {
      id: '5',
      image: 'assets/images/B5.png',
      readTime: '7 min read',
      date: '05 June 2025',
      title: 'Top 5 Must-Have Smart Devices for Your Home in 2025',
      link: '/blog/top-5-smart-devices'
    },
    {
      id: '6',
      image: 'assets/images/B6.png',
      readTime: '7 min read',
      date: '15 June 2025',
      title: 'Beyond Convenience: The Health Benefits of Smart Home Technology',
      link: '/blog/health-benefits'
    },
    {
      id: '7',
      image: 'assets/images/B7.png',
      readTime: '5 min read',
      date: '01 July 2025',
      title: 'Smart Homes and the Internet of Things: A Game Changer for Families',
      link: '/blog/iot-game-changer'
    },
    {
      id: '8',
      image: 'assets/images/B8.png',
      readTime: '6 min read',
      date: '20 July 2025',
      title: 'Future-Proofing Your Home: Integrating Smart Tech for Long-Term Benefit',
      link: '/blog/future-proofing'
    },
    {
      id: '9',
      image: 'assets/images/B9.png',
      readTime: '4 min read',
      date: '05 August 2025',
      title: 'Understanding Smart Home Security: Tips for Protecting Your Space',
      link: '/blog/smart-home-security'
    },
    {
      id: '10',
      image: 'assets/images/B1.png',
      readTime: '5 min read',
      date: '20 August 2025',
      title: 'Voice Control Revolution: How Smart Assistants are Changing Our Homes',
      link: '/blog/voice-control'
    },
    {
      id: '11',
      image: 'assets/images/B3.png',
      readTime: '6 min read',
      date: '01 September 2025',
      title: 'Energy Efficiency: How Smart Thermostats Save Money',
      link: '/blog/energy-efficiency'
    },
    {
      id: '12',
      image: 'assets/images/B5.png',
      readTime: '7 min read',
      date: '15 September 2025',
      title: 'The Future of Smart Kitchens: Technology Meets Culinary Arts',
      link: '/blog/smart-kitchens'
    }
  ];

}
